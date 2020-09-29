import { Component, Injector } from '@angular/core';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FiltroBaseComponent } from '../filtro-base.component';
import { LoadFiltroBusca } from '../state/filtro.actions';
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
  ngOnInit(): void {
    super.ngOnInit();
    this.formulario.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(
      res => {
        console.log(res)
        this.store.dispatch(new LoadFiltroBusca(res));
      }
    )
  }
}
