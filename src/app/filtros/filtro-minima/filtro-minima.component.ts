import { Store } from '@ngrx/store';
import { FiltrosState } from './../state/filtro.state.app';
import { AfterContentInit, AfterViewInit, Component, ElementRef, HostListener, Injector, ViewChild } from '@angular/core';
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
export class FiltroMinimaComponent extends FiltroBaseComponent<FiltrosState> implements AfterViewInit {
  slider: any;
  dataSlider: number = 50000;
  dataSteps: number[] = [ 0, 1, 100, 500, 1000, 2000, 2500, 3000, 5000, 10000, 15000, 20000, 25000, 30000, 50000, 100000, 250000, 500000];
  @ViewChild('minima') elementRef: ElementRef;
  private sliderObserver: MutationObserver;


  constructor(
    protected injector: Injector,
    protected store: Store<FiltrosState>) {
    super(injector, store);
  }

  public ngOnInit(): void{
    super.ngOnInit();
    
    const el = document.querySelector('.slider-handle');

    this.sliderObserver = new MutationObserver(( mutations: MutationRecord[] ) => {
      mutations.forEach((mutation: MutationRecord) => {
        this.formulario.setValue({ dado: +mutation.target['ariaValueNow'] });
      });
    });
    this.sliderObserver.observe(el, {
      attributes: true,
      attributeFilter: [ 'aria-valuenow'],
      attributeOldValue: true,
      childList: false,
      characterData: false
    });

    // todo: descobrir o porque do bug nessa funcao de patchValue
    // this.formulario.get('dado').patchValue(this.dataSlider / 2);

    this.formulario.valueChanges.pipe(
      debounceTime(500), distinctUntilChanged(),
    ).subscribe(
      val => this.store.dispatch(new actions.NewFiltroMinima(val))
    );
  }

  ngAfterViewInit(): void {
    this.buildSlider();
  }

  protected buildSlider(): void {
    const options: object = {
      step: 100,
      end: this.dataSlider,
      initialStart: (this.dataSlider / 2 ),
    };
    const el = $(this.elementRef.nativeElement);
    this.slider = new Foundation.Slider(el, options);
  }

}
