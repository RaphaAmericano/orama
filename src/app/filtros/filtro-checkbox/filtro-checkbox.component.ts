import { AfterViewChecked, AfterViewInit, Component, Injector } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { FiltroBaseComponent } from '../filtro-base.component';
import { FiltrosState } from '../state/filtro.state.app';
import * as fromFundos from '../../state/index';
import * as fromFiltros from '../state/index';
import * as actions from '../state/filtro.actions';
import { combineAll, concatMap, debounceTime, distinct, flatMap, map, mergeMap, switchMap, tap, toArray, withLatestFrom } from 'rxjs/operators';
import { Fundo } from 'src/app/core/models/fundo.model';
import { combineLatest, forkJoin, of, pipe, zip } from 'rxjs';

@Component({
  selector: 'app-filtro-checkbox',
  templateUrl: './filtro-checkbox.component.html',
  styleUrls: ['./filtro-checkbox.component.scss']
})
export class FiltroCheckboxComponent extends FiltroBaseComponent<FiltrosState> {

  public fields: any[] = ['Indexado Soberano', 'Renda Fixa', 'Renda Fixa Crédito Privado', 'Crédito Privado High Yield', 'Renda Fixa inflação Soberano', 'Inflação Crédito Privado']

  constructor(
    protected injector: Injector,
    protected store: Store<FiltrosState>
  ) { 
    super(injector, store);
  }

  ngOnInit(): void {
    super.ngOnInit();
    // this.buildFormArray();
    //specification.fund_type
    this.store.pipe(
      select(fromFundos.getFundosBase),
      debounceTime(5000),
      map((fundos: Fundo[] ) => fundos.map( (fundo: Fundo ) =>  { 
          const branchmark = { 
            branchmark: fundo.benchmark.name, 
            id: fundo.benchmark.id,
            checked: true,
            checkboxes: new Array()
          };
          fundos.map((fundo1:Fundo) => {
            if(fundo.benchmark.id == fundo1.benchmark.id){
              branchmark.checkboxes.push( fundo1.specification.fund_type )
            }
          })
          return branchmark;
          }
        )
      )
    );
    
    const branchs = this.store.pipe(
      select(fromFundos.getFundosBase),
      debounceTime(5000),
      map((fundos: Fundo[]) => fundos.map( (fundo: Fundo) => {
          return { nome: fundo.benchmark.name , id: fundo.benchmark.id, checkboxes: [] }
          }
        )
      ),
      map( (dados) => {
        return dados.filter((dado, i, self) => {
          return i === self.findIndex((branch) => branch.id === dado.id && branch.nome === dado.nome)
        })
      })
    )

    const checkboxes = this.store.pipe(
      select(fromFundos.getFundosBase),
      debounceTime(5000),
      map((fundos: Fundo[]) => fundos.map( (fundo: Fundo) => {
            return { nome: fundo.specification.fund_type, idBranch: fundo.benchmark.id }
          }
        )
      ),
      map( (checkboxs) => {
        return checkboxs.filter((checkbox, i, self) => {
          return i === self.findIndex((branch) => branch.nome === checkbox.nome && branch.idBranch === checkbox.idBranch )
        })
      })
    )

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
      tap(val => console.log(val))
    ).subscribe()

  }

  private buildFormArray(): void {
    this.formulario.get('dado').patchValue(this.addFields(this.fields));
    // console.log(this.formulario.get('dado').value.controls)
  }

  private addFields(arr: any[]): FormGroup {
    const formControls = arr.map( dado => { 
      return { [dado]: [ true ] };
    });
    // console.log(formControls)
    return this.formBuilder.group(formControls);
  }

}
