import { Component, Injector, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FiltroBaseComponent } from '../filtro-base.component';
import { FiltrosState } from '../state/filtro.state.app';
import * as filtroActions from '../state/filtro.actions';
@Component({
  selector: 'app-filtro-risco',
  templateUrl: './filtro-risco.component.html',
  styleUrls: ['./filtro-risco.component.scss']
})
export class FiltroRiscoComponent extends FiltroBaseComponent<FiltrosState>{

  constructor(
    protected injector: Injector,
    protected store: Store<FiltrosState>
  ) { 
    super(injector, store);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.formulario.valueChanges.subscribe(
      res => this.store.dispatch(new filtroActions.NewFiltroRisco(res.dado))
    )
  }
  
  public selectMedidor(medidor: number): void { 
    this.formulario.get('dado').setValue(medidor);
  }

}
