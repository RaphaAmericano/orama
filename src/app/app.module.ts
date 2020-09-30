import { FiltrosModule } from './filtros/filtros.module';
import { ListaFundosModule } from './lista-fundos/lista-fundos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './header/header.component';
import { reducer } from './state/fundo.reducer';
import { FundoEffects } from './state/fundo.effects';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    FiltrosModule,
    ListaFundosModule,
    // StoreModule.forRoot({}, {}),
    StoreModule.forRoot({ 'fundos' : reducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([FundoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
