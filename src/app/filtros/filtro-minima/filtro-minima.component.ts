import { Component, Injector } from '@angular/core';
import { FiltroBaseComponent } from '../filtro-base.component';

@Component({
  selector: 'app-filtro-minima',
  templateUrl: './filtro-minima.component.html',
  styleUrls: ['./filtro-minima.component.scss']
})
export class FiltroMinimaComponent extends FiltroBaseComponent {

  constructor(protected injector: Injector) {
    super(injector);
  }

}
