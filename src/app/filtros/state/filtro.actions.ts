import { FiltrosActionTypes } from './filtro.types.enum';
import { Action } from '@ngrx/store';

export class LoadFiltroMinima implements Action {
  readonly type = FiltrosActionTypes.LoadFiltroMinima;
  constructor(public payload: { dado: any} ){}
}

export class LoadFiltroBusca implements Action {
  readonly type = FiltrosActionTypes.LoadFiltroBusca;
  constructor(public payload: { dado: string} ){}
}

export type FiltrosActions = LoadFiltroMinima | LoadFiltroBusca;
