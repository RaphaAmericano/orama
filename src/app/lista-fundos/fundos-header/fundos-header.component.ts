import { Fundo } from './../../core/models/fundo.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-fundos-header]',
  templateUrl: './fundos-header.component.html',
  styleUrls: ['./fundos-header.component.scss']
})
export class FundosHeaderComponent implements OnInit {

  @Input()
  data: Fundo;

  @Input()
  index: number;

  constructor() { }

  ngOnInit(): void {
    
  }
}
