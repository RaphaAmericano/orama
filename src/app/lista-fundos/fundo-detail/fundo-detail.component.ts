import { Fundo } from './../../core/models/fundo.model';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { state, style, transition, trigger, animate, keyframes } from '@angular/animations';
@Component({
  selector: 'app-fundo-detail',
  templateUrl: './fundo-detail.component.html',
  styleUrls: ['./fundo-detail.component.scss'],
  animations: [
    trigger('tr', [
      state('void', style({ height: '0px', minHeight: 0, display: 'block'})),
      state('*', style({ height: '*', display: 'table-row' })),
      transition(':enter', animate(250, keyframes([
        style({ offset: 0, height: '0px'}),
        style({ offset: 0.25, height: '150px'}),
        style({ offset: 0.5, height: '200px'}),
        style({ offset: 0.75, height: '250px'}),
        style({ offset: 0.80, height: '300px'}),
        style({ offset: 1, height: '300px'})
      ]))),
      transition(':leave', animate(250, keyframes([
        style({ offset: 0, height: '300px', display: 'block'}),
        style({ offset: 0.25, height: '250px'}),
        style({ offset: 0.5, height: '200px'}),
        style({ offset: 0.75, height: '150px'}),
        style({ offset: 1, height: '0px'})
      ]))),
      ]),
    trigger('td', [
      state('void', style({ opacity: 0, visibility: 'hidden'})),
      state('*', style({ opacity: 1, visibility: 'visible' })),
      transition(':enter', animate(1000))
      // transition(':enter', animate(1000, keyframes([
      //   style({ offset: 0}),
      //   style({ offset: 0.25}),
      //   style({ offset: 0.5}),
      //   style({ offset: 0.75}),
      //   style({ offset: 0.85, opacity: 0.5}),
      //   style({ offset: 0.95, opacity: 0.75}),
      //   style({ offset: 1, opacity: 1})
      // ])))
    ] )
  ]
})
export class FundoDetailComponent implements OnInit, AfterViewInit, OnDestroy {

  openClose: string = 'close';

  @Input()
  data: Fundo;

  @Input()
  index: number;

  constructor() { }

  ngOnInit(): void {
    this.openClose = 'open';
  }

  ngAfterViewInit(): void {
    console.log(this.data);
  }

  ngOnDestroy(): void {
    this.openClose = 'close';
  }

}
