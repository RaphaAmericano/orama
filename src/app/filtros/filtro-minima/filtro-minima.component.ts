import { Store } from '@ngrx/store';
import { FiltrosState } from './../state/filtro.state.app';
import { Component, Injector } from '@angular/core';
import { FiltroBaseComponent } from '../filtro-base.component';
import * as actions from './../state/filtro.actions';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import 'foundation-sites';

declare const foundation: any;
@Component({
  selector: 'app-filtro-minima',
  templateUrl: './filtro-minima.component.html',
  styleUrls: ['./filtro-minima.component.scss']
})
export class FiltroMinimaComponent extends FiltroBaseComponent {
  slider: any;
  dataSlider: number = 50000;
  constructor(
    protected injector: Injector,
    protected store: Store<FiltrosState>) {
    super(injector, store);
  }

  public ngOnInit(): void{
    super.ngOnInit();
    this.buildSlider();
    this.formulario.patchValue({ dado: (this.dataSlider / 2) });
    this.formulario.valueChanges.pipe(
      debounceTime(500), distinctUntilChanged()
    ).subscribe(
      val => this.store.dispatch(new actions.LoadFiltroMinima(val))
    )

  }

  sliderChange(valor): void {
    this.formulario.patchValue({
      dado: +valor.target.attributes['aria-valuenow'].value
    });
  }

  protected buildSlider(): void {
    const options: object = {
      end: this.dataSlider,
      initialStart: (this.dataSlider / 2 ),
    }
    this.slider = new Foundation.Slider($('.slider'), options);
  }

}
