import { FiltrosActionTypes } from './filtro.types.enum';
import { Action } from '@ngrx/store';

export class LoadFiltroMinima implements Action {
  readonly type = FiltrosActionTypes.LoadFiltroMinima;
}
export class NewFiltroMinima implements Action {
  readonly type = FiltrosActionTypes.NewFiltroMinima;
  constructor(public payload: { dado: any } ){}
}

export class ErroFiltroMinima implements Action {
  readonly type = FiltrosActionTypes.ErroFiltroMinima;
  constructor(public payload: any ) {}
}

export class LoadFiltroBusca implements Action {
  readonly type = FiltrosActionTypes.LoadFiltroBusca;
  constructor(public payload: { dado: string } ){}
}

export class LoadFiltroPrazo implements Action {
  readonly type = FiltrosActionTypes.LoadFiltroPrazo;
}
export class NewFiltroPrazo implements Action {
  readonly type = FiltrosActionTypes.NewFiltroPrazo;
  constructor(public payload: { dado: number } ){}
}
export class ErroFiltroPrazo implements Action {
  readonly type = FiltrosActionTypes.ErroFiltroPrazo;
  constructor(public payload: any ){}
}

export class LoadFiltrosCheckbox implements Action {
  readonly type = FiltrosActionTypes.LoadFiltroCheckbox;
}

export class NewFiltroCheckbox implements Action {
  readonly type = FiltrosActionTypes.NewFiltroCheckbox;
  constructor(public payload: any){}
}

export class NewFiltroSubCheckbox implements Action {
  readonly type = FiltrosActionTypes.NewFiltroSubCheckbox;
  constructor(public payload: any){}
}

export type FiltrosActions =
LoadFiltroMinima |
NewFiltroMinima |
ErroFiltroMinima |
LoadFiltroPrazo|
NewFiltroPrazo|
ErroFiltroPrazo|
LoadFiltroBusca |
LoadFiltrosCheckbox |
NewFiltroCheckbox |
NewFiltroSubCheckbox
;
