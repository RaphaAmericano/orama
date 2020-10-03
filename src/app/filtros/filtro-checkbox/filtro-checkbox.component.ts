import { Component, Injector } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FiltroBaseComponent } from '../filtro-base.component';
import { FiltrosState } from '../state/filtro.state.app';

@Component({
  selector: 'app-filtro-checkbox',
  templateUrl: './filtro-checkbox.component.html',
  styleUrls: ['./filtro-checkbox.component.scss']
})
export class FiltroCheckboxComponent extends FiltroBaseComponent<FiltrosState>  {

  public fields: any[] = ['Indexado Soberano', 'Renda Fixa', 'Renda Fixa Crédito Privado', 'Crédito Privado High Yield', 'Renda Fixa inflação Soberano', 'Inflação Crédito Privado']

  constructor(
    protected injector: Injector,
    protected store: Store<FiltrosState>
  ) { 
    super(injector, store);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.buildFormArray();
  }

  private buildFormArray(): void {
    this.formulario.get('dado').patchValue(this.addFields(this.fields));
    console.log(this.formulario.get('dado').value.controls)
  }

  private addFields(arr: any[]): FormGroup {
    const formControls = arr.map( dado => { 
      return { [dado]: [ true ] };
    });
    console.log(formControls)
    return this.formBuilder.group(formControls);
  }

}
