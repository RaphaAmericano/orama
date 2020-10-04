import { DatabaseService } from './services/database.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StateService } from './services/state.service';



@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [DatabaseService, StateService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule ){
    if(parentModule){
      throw new Error( 'Modulo Core já carregado. Importar-lo apenas no AppModule');
    }
  }
}
