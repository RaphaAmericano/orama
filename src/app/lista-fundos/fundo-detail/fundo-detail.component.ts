import { Fundo } from './../../core/models/fundo.model';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { state, style, transition, trigger, animate } from '@angular/animations';
@Component({
  selector: 'app-fundo-detail',
  templateUrl: './fundo-detail.component.html',
  styleUrls: ['./fundo-detail.component.scss'],
  animations: [
    trigger('state', [
      state('void, hidden', style({ transform: 'scale(0)'})),
      state('visible', style({ transform: 'scale(1)'})),
      transition('* => visible', animate('500ms ease-in-out')),
      transition('* => hidden', animate('500ms ease-in-out'))
    ])
  ]
})
export class FundoDetailComponent implements OnInit, AfterViewInit, OnDestroy {

  visibility: string = 'visible';

  @Input()
  data: Fundo;

  @Input()
  index: number;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    console.log(this.data);
  }

  ngOnDestroy(): void {
   this.visibility = 'hidden' 
  }

}
