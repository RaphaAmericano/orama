import { Component, Injector } from '@angular/core';
import { Store } from '@ngrx/store';
import { FiltroBaseComponent } from '../filtro-base.component';
import { FiltrosState } from '../state/filtro.state.app';

@Component({
  selector: 'app-filtro-busca',
  templateUrl: './filtro-busca.component.html',
  styleUrls: ['./filtro-busca.component.scss']
})
export class FiltroBuscaComponent extends FiltroBaseComponent<FiltrosState> {

  constructor(protected injector: Injector, protected store: Store<FiltrosState>) {
    super(injector, store);
  }

}
