import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltrosRoutingModule } from './filtros-routing.module';
import { FiltrosComponent } from './filtros.component';
import { FiltroBuscaComponent } from './filtro-busca/filtro-busca.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FiltroMinimaComponent } from './filtro-minima/filtro-minima.component';
import { reducer } from './state/filtro.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FiltroEffects } from './state/filtro.effects';
import { FiltroRiscoComponent } from './filtro-risco/filtro-risco.component';
import { FiltroPrazoComponent } from './filtro-prazo/filtro-prazo.component';

@NgModule({
  declarations: [FiltrosComponent, FiltroBuscaComponent, FiltroMinimaComponent, FiltroRiscoComponent, FiltroPrazoComponent],
  imports: [
    CommonModule,
    FiltrosRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('filtros', reducer),
    EffectsModule.forFeature([FiltroEffects])
  ],
  exports: [FiltrosComponent, FiltroBuscaComponent, FiltroMinimaComponent, FiltroRiscoComponent, FiltroPrazoComponent]
})
export class FiltrosModule { }
