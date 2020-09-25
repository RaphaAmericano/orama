import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule ){
    if(parentModule){
      throw new Error( 'Modulo Core já carregado. Importar-lo apenas no AppModule');
    }
  }
}
