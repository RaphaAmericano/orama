import { Fundo } from './../../core/models/fundo.model';
import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: '[app-fundos-header]',
  templateUrl: './fundos-header.component.html',
  styleUrls: ['./fundos-header.component.scss']
})
export class FundosHeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('tooltip') tooltip: ElementRef;

  @Input()
  data: Fundo;

  @Input()
  index: number;

  constructor() { 
    
  }

  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {
    this.buildTooltip();
  }

  private buildTooltip(): void {
    const this$ = this;
    const el = $(this$.tooltip.nativeElement);
    const options = {
      fadeInDuration: 500,
      fadeOutDuration: 500,
      disableHover: false,
      tipText: 'Fundo para investidor qualificado',
    };
    new Foundation.Tooltip(el, options);
  }

}
