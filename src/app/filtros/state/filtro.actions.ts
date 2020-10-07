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

export class NewFiltroRisco implements Action {
  readonly type = FiltrosActionTypes.NewFiltroRisco;
  constructor(public payload: number){}
}

export class ClearFiltroRisco implements Action {
  readonly type = FiltrosActionTypes.ClearFiltroRisco;
}

export class ErroFiltroRisco implements Action {
  readonly type = FiltrosActionTypes.ErroFiltroRisco;
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
NewFiltroRisco |
ClearFiltroRisco |
ErroFiltroRisco
;
