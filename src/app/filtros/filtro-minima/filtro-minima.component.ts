import { Store } from '@ngrx/store';
import { FiltrosState } from './../state/filtro.state.app';
import { Component, HostListener, Injector } from '@angular/core';
import { FiltroBaseComponent } from '../filtro-base.component';
import * as actions from './../state/filtro.actions';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import 'foundation-sites';

// declare const foundation: any;

@Component({
  selector: 'app-filtro-minima',
  templateUrl: './filtro-minima.component.html',
  styleUrls: ['./filtro-minima.component.scss']
})
export class FiltroMinimaComponent extends FiltroBaseComponent<FiltrosState> {
  slider: any;
  dataSlider: number = 50000;

  private sliderObserver: MutationObserver;


  constructor(
    protected injector: Injector,
    protected store: Store<FiltrosState>) {
    super(injector, store);
  }

  public ngOnInit(): void{
    super.ngOnInit();
    this.buildSlider();
    const el = document.querySelector('.slider-handle');
    this.sliderObserver = new MutationObserver(( mutations: MutationRecord[] ) => {
      mutations.forEach((mutation: MutationRecord) => {
        this.formulario.patchValue({ dado: +mutation.target['ariaValueNow'] });
      });
    });
    this.sliderObserver.observe(el, {
      attributes: true,
      attributeFilter: [ 'aria-valuenow'],
      attributeOldValue: true,
      childList: false,
      characterData: false
    });

    this.formulario.patchValue({ dado: (this.dataSlider / 2) });
    this.formulario.valueChanges.pipe(
      debounceTime(500), distinctUntilChanged(),
      tap((val) => console.log(val))
    ).subscribe(
      val => this.store.dispatch(new actions.LoadFiltroMinima(val))
    );
  }

  protected buildSlider(): void {
    const options: object = {
      end: this.dataSlider,
      initialStart: (this.dataSlider / 2 ),
    };
    this.slider = new Foundation.Slider($('.slider'), options);
  }

}
