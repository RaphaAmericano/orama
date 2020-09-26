import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({ template: '' })
export abstract class FiltroBaseComponent implements OnInit {

  public filtro: string;
  public formulario: FormGroup;
  protected formBuilder: FormBuilder;

  constructor(protected injector: Injector){
    this.formBuilder = this.injector.get(FormBuilder);
  }
  ngOnInit(): void {
    this.constroiFormulario();
  }

  private constroiFormulario(): void {
    this.formulario = this.formBuilder.group({
      dado: [null]
    });
  }

}
