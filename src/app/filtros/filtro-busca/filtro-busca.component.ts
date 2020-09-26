import { Component, Injector } from '@angular/core';
import { FiltroBaseComponent } from '../filtro-base.component';

@Component({
  selector: 'app-filtro-busca',
  templateUrl: './filtro-busca.component.html',
  styleUrls: ['./filtro-busca.component.scss']
})
export class FiltroBuscaComponent extends FiltroBaseComponent {

  constructor(protected injector: Injector) {
    super(injector);
  }

}
