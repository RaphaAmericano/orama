import { Fundo } from './../../core/models/fundo.model';
import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef, AfterViewChecked, AfterContentChecked, AfterContentInit, OnDestroy } from '@angular/core';

@Component({
  selector: '[app-fundos-header]',
  templateUrl: './fundos-header.component.html',
  styleUrls: ['./fundos-header.component.scss']
})
export class FundosHeaderComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('tooltip') tooltip: ElementRef;
  @ViewChild('tooltipInfo') tooltipInfo: ElementRef;

  @Input()
  data: Fundo;

  @Input()
  index: number;

  constructor() { }

  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {
    this.buildTooltip(this.tooltip);
    if(this.tooltipInfo !== undefined){
      this.buildTooltip(this.tooltipInfo, true);
    }
  }

  ngOnDestroy(): void {
    this.destroyTooltip(this.tooltip);
    if(this.tooltipInfo !== undefined){
      this.destroyTooltip(this.tooltipInfo);
    }
  }

  private buildTooltip(el: ElementRef, className: boolean = false ): void {
    const $el = $(el.nativeElement);
    let options;
    if (className) {
      options = {
        clickOpen: true,
        template: `<div class="tooltip tooltip-info"><p><b>Dias para conversão do resgate:</b><br>${this.data.operability.retrieval_liquidation_days_str}</p></div>`
      };
    }
    else {
      options = {
        disableHover: false
      };
    }
    new Foundation.Tooltip($el, options);
  }

  private destroyTooltip(el: ElementRef): void {
    $(el.nativeElement).foundation('_destroy');
  }

}
