import { AfterViewChecked, AfterViewInit, Component, Injector } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { FiltroBaseComponent } from '../filtro-base.component';
import { FiltrosState } from '../state/filtro.state.app';
import * as fromFundos from '../../state/index';
import * as fromFiltros from '../state/index';
import * as actions from '../state/filtro.actions';
import { combineAll, concatMap, debounceTime, distinct, flatMap, map, mergeMap, skipUntil, skipWhile, switchMap, tap, toArray, withLatestFrom } from 'rxjs/operators';
import { Fundo } from 'src/app/core/models/fundo.model';
import { combineLatest, forkJoin, of, pipe, zip } from 'rxjs';

export interface Checkbox {
  id: number;
  nome: string;
  value: boolean;
  checkboxes: Nivel2[];
}
export interface Nivel2 extends Checkbox {
  idBranch: number;
}
@Component({
  selector: 'app-filtro-checkbox',
  templateUrl: './filtro-checkbox.component.html',
  styleUrls: ['./filtro-checkbox.component.scss']
})
export class FiltroCheckboxComponent extends FiltroBaseComponent<FiltrosState> {

  // public fields: any[] = ['Indexado Soberano', 'Renda Fixa', 'Renda Fixa Crédito Privado', 'Crédito Privado High Yield', 'Renda Fixa inflação Soberano', 'Inflação Crédito Privado']

  constructor(
    protected injector: Injector,
    protected store: Store<FiltrosState>
  ) { 
    super(injector, store);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.initCheckboxesState();
    this.buildFormArray();
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
      tap(res => this.store.dispatch(new actions.NewFiltroCheckbox(res)))
    ).subscribe()
  }

  private buildFormArray(): void {
    this.store.pipe(
      select(fromFiltros.getFiltroCheckbox),
      skipWhile(val => val === null),
      switchMap(
        (checkboxes: Checkbox[]) => {
          return checkboxes.map((checkbox) => {
            const controls = {};
            for(const key of checkbox.checkboxes){
              console.log(key);
              controls[key.id] = key.value;
            }
            controls[checkbox.id] = true;
            this.formulario.addControl(checkbox.id.toString(), this.formBuilder.group(controls));
          });
        }
      )
    ).subscribe( res => console.log(this.formulario));
  }

}
