import { FiltrosState } from './state/filtro.state.app';
import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({ template: '' })
export abstract class FiltroBaseComponent<T> implements OnInit {

  public filtro: string;
  public formulario: FormGroup;
  protected formBuilder: FormBuilder;

  constructor(
    protected injector: Injector,
    protected store: Store<T>){
    this.formBuilder = this.injector.get(FormBuilder);
  }
  ngOnInit(): void {
    this.buildForm();
    this.formulario.valueChanges.subscribe(
      res => console.log(res)
    )
  }

  private buildForm(): void {
    this.formulario = this.formBuilder.group({
      dado: [null]
    });
  }

}
