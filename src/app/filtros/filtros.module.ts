import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltrosRoutingModule } from './filtros-routing.module';
import { FiltrosComponent } from './filtros.component';
import { FiltroBuscaComponent } from './filtro-busca/filtro-busca.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FiltrosComponent, FiltroBuscaComponent],
  imports: [
    CommonModule,
    FiltrosRoutingModule,
    ReactiveFormsModule
  ],
  exports: [FiltrosComponent, FiltroBuscaComponent]
})
export class FiltrosModule { }
