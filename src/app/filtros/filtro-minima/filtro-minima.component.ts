import { Component, Injector } from '@angular/core';
import { FiltroBaseComponent } from '../filtro-base.component';
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
  constructor(protected injector: Injector) {
    super(injector);
  }

  public ngOnInit(): void{
    super.ngOnInit();
    this.constroiSlider();
    this.formulario.patchValue({ dado: (this.dataSlider / 2) });
  }

  sliderIn(valor): void {
    this.formulario.patchValue({
      dado: +valor.target.attributes['aria-valuenow'].value
    });
  }

  protected constroiSlider(): void {
    const options: object = {
      end: this.dataSlider,
      initialStart: (this.dataSlider / 2 ),
    }
    this.slider = new Foundation.Slider($('.slider'), options);
  }

}
