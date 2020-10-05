import { AfterViewChecked, AfterViewInit, Component, Injector } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { FiltroBaseComponent } from '../filtro-base.component';
import { FiltrosState } from '../state/filtro.state.app';
import * as fromFundos from '../../state/index';
import * as fromFiltros from '../state/index';
import * as actions from '../state/filtro.actions';
import { combineAll, concatMap, debounceTime, distinct, find, findIndex, flatMap, map, mergeMap, pluck, skipUntil, skipWhile, switchMap, tap, toArray, withLatestFrom } from 'rxjs/operators';
import { Fundo } from 'src/app/core/models/fundo.model';
import { combineLatest, forkJoin, Observable, of, pipe, zip } from 'rxjs';

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

  constructor(
    protected injector: Injector,
    protected store: Store<FiltrosState>
  ) { 
    super(injector, store);
  }

  ngOnInit(): void {
    // super.ngOnInit();
    this.buildFormGroups();
    this.formulario.valueChanges.subscribe(
      res => console.log(res)
    )
  }

  private buildFormGroups(): void {
    console.log(this.formulario);
    this.store.pipe(
      select(fromFiltros.getFiltroCheckbox),
      skipWhile(val => val === null),
      switchMap(
        (checkboxes: Checkbox[]) => {
          return checkboxes.map((checkbox) => {
            const controls = {};
            for(const key of checkbox.checkboxes){
              controls[key.id] = new FormControl(key.value);
            }
            const formulario = new FormGroup( {
              [checkbox.id]: this.formBuilder.control(checkbox.value),
              checkboxes: new FormGroup(controls)
            });
            this.formulario.addControl(checkbox.id.toString(), formulario);
          });
        }
      )
    ).subscribe();
  }
  public visualizarForm(): void {
    console.log(this.formulario.controls);
  }

  public getCheckboxLabelById(id: number): Observable<string> {
   return this.store.select(fromFiltros.getFiltroCheckbox).pipe(
      skipWhile(val => val === null),
      switchMap((checkboxes: Checkbox[]) => checkboxes.map( checkbox => checkbox)
      ),
      find(checkbox => checkbox.id === +id ),
      pluck('nome')
    );
    
  };

  public objectKeys(obj: any): any {
    return Object.keys(obj);
  }
}
