import { ListaFundosComponent } from './lista-fundos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaFundosRoutingModule } from './lista-fundos-routing.module';


@NgModule({
  declarations: [ListaFundosComponent],
  imports: [
    CommonModule,
    ListaFundosRoutingModule
  ],
  exports: [ListaFundosComponent]
})
export class ListaFundosModule { }
