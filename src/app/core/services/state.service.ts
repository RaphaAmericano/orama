import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { zip } from 'rxjs';
import { map, skipWhile, tap } from 'rxjs/operators';
import { FiltrosState } from 'src/app/filtros/state/filtro.state.app';
import * as fromFundos from '../../state/index';
import * as actionsFiltros from '../../filtros/state/filtro.actions';
import { Fundo } from '../models/fundo.model';
@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private store: Store<any>) { 
    console.log('State Service');
    this.initCheckboxesState();
  }
  private initCheckboxesState(): void {
    const branchs = this.store.pipe(
      select(fromFundos.getFundosBase),
      skipWhile(val => val === null),
      map((fundos: Fundo[]) => fundos.map( (fundo: Fundo) => {
          return { nome: fundo.benchmark.name , id: fundo.benchmark.id, checkboxes: [], value: true }
          }
        )
      ),
      map( (dados) => {
        return dados.filter((dado, i, self) => {
          return i === self.findIndex((branch) => branch.id === dado.id && branch.nome === dado.nome)
        })
      })
    );

    const checkboxes = this.store.pipe(
      select(fromFundos.getFundosBase),
      skipWhile(val => val === null),
      map((fundos: Fundo[]) => fundos.map( (fundo: Fundo, i) => {
            return { nome: fundo.specification.fund_type, idBranch: fundo.benchmark.id, id: i,  value: true }
          }
        )
      ),
      map( (checkboxs) => {
        return checkboxs.filter((checkbox, i, self) => {
          return i === self.findIndex((branch) => branch.nome === checkbox.nome && branch.idBranch === checkbox.idBranch )
        })
      })
    );

    const mixed = zip(
      branchs,
      checkboxes
    ).pipe( 
      map(([branchs, checkboxes]) => {
        return branchs.map((branch) => {
          checkboxes.map(checkbox => {
            if(checkbox.idBranch === branch.id){
              branch.checkboxes.push(checkbox);
            }
          });
          return branch;
        })
      }),
      tap(res => this.store.dispatch(new actionsFiltros.NewFiltroCheckbox(res)))
    ).subscribe()
  }
}
