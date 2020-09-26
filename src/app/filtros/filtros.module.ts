import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltrosRoutingModule } from './filtros-routing.module';
import { FiltrosComponent } from './filtros.component';
import { FiltroBuscaComponent } from './filtro-busca/filtro-busca.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FiltroMinimaComponent } from './filtro-minima/filtro-minima.component';


@NgModule({
  declarations: [FiltrosComponent, FiltroBuscaComponent, FiltroMinimaComponent],
  imports: [
    CommonModule,
    FiltrosRoutingModule,
    ReactiveFormsModule
  ],
  exports: [FiltrosComponent, FiltroBuscaComponent, FiltroMinimaComponent]
})
export class FiltrosModule { }
