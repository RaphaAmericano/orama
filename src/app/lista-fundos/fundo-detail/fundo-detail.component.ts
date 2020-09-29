import { Fundo } from './../../core/models/fundo.model';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundo-detail',
  templateUrl: './fundo-detail.component.html',
  styleUrls: ['./fundo-detail.component.scss']
})
export class FundoDetailComponent implements OnInit, AfterViewInit {

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

}
