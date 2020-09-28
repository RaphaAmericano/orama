import { ListaFundosComponent } from './lista-fundos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaFundosRoutingModule } from './lista-fundos-routing.module';
import { FundoDetailComponent } from './fundo-detail/fundo-detail.component';
import { FundosHeaderComponent } from './fundos-header/fundos-header.component';
import { FundosLinhaComponent } from './fundos-linha/fundos-linha.component';


@NgModule({
  declarations: [ListaFundosComponent, FundoDetailComponent, FundosHeaderComponent],
  imports: [
    CommonModule,
    ListaFundosRoutingModule
  ],
  exports: [ListaFundosComponent]
})
export class ListaFundosModule { }
