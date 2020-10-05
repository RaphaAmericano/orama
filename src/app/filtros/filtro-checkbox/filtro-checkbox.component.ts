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

  constructor(
    protected injector: Injector,
    protected store: Store<FiltrosState>
  ) { 
    super(injector, store);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.buildFormArray();
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
              controls[key.id] = new FormControl(key.value);
            }
            // console.log(controls);
            const formulario = new FormGroup( {
              [checkbox.id]: this.formBuilder.control(checkbox.value),
              checkboxes: new FormGroup(controls)
            })

            console.log(formulario);
            // this.formulario.addControl(checkbox.id.toString(), new FormControl(checkbox.value));
            this.formulario.addControl(checkbox.id.toString(), formulario);
          });
        }
      )
    ).subscribe();
  }
  public visualizarForm(): void {
    console.log(this.formulario);
  }
}
