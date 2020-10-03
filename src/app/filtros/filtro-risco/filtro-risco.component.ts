import { Component, Injector, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FiltroBaseComponent } from '../filtro-base.component';
import { FiltrosState } from '../state/filtro.state.app';

@Component({
  selector: 'app-filtro-risco',
  templateUrl: './filtro-risco.component.html',
  styleUrls: ['./filtro-risco.component.scss']
})
export class FiltroRiscoComponent extends FiltroBaseComponent<FiltrosState> implements OnInit {

  constructor(
    protected injector: Injector,
    protected store: Store<FiltrosState>
  ) { 
    super(injector, store);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
  
}
