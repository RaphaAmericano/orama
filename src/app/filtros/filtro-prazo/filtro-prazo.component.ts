import { AfterViewInit, Component, ElementRef, Injector, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FiltroBaseComponent } from '../filtro-base.component';
import { FiltrosState } from '../state/filtro.state.app';
import * as fromFundos from '../../state/index';
import * as actions from '../state/filtro.actions';
import { Fundo } from 'src/app/core/models/fundo.model';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-filtro-prazo',
  templateUrl: './filtro-prazo.component.html',
  styleUrls: ['./filtro-prazo.component.scss']
})
export class FiltroPrazoComponent extends FiltroBaseComponent<FiltrosState> implements AfterViewInit{
  
  public slider: any;
  public maxRange: number;
  @ViewChild('prazo') elementRef: ElementRef;
  private sliderObserver: MutationObserver;

  constructor(
    protected injector: Injector,
    protected store: Store<FiltrosState>
  ) { 
    super(injector, store);
  }

  ngOnInit(): void {
    super.ngOnInit();
    const el = document.querySelector('.slider-handle.slider-prazo');
    this.sliderObserver = new MutationObserver((mutations: MutationRecord[]) => {
      mutations.forEach((mutation: MutationRecord) => {
        this.formulario.setValue({ dado: +mutation.target['ariaValueNow']})
      });
    });
    this.sliderObserver.observe(el, {
      attributes: true,
      attributeFilter: [ 'aria-valuenow'],
      attributeOldValue: true,
      childList: false,
      characterData: false
    });

    this.formulario.valueChanges.pipe(
      debounceTime(500), distinctUntilChanged()
    ).subscribe( 
      val => {
        console.log(val);
        this.store.dispatch(new actions.NewFiltroPrazo(val))}
    );
  }

  ngAfterViewInit(): void {
    this.store.pipe(
      select(fromFundos.getFundosBase),
      map((fundos: Fundo[]) => fundos ? fundos.map((fundo: Fundo) => fundo.operability.retrieval_quotation_days) : new Array<number>()),
    ).subscribe( 
      (dias) => { 
        if(dias.length > 0) {  
          this.maxRange = Math.max.apply(Math, dias);
          this.buildSlider(this.maxRange);
        }
      })
  }

  protected buildSlider(range: number): void {
    const options: object = {
      step: 10,
      end: range,
      initialStart: 0,
    };
    const el = $(this.elementRef.nativeElement);
    this.slider = new Foundation.Slider(el, options);
  }
}
