import { FiltrosActionTypes } from './filtro.types.enum';
import { Action } from '@ngrx/store';

export class LoadFiltroMinima implements Action {
  readonly type = FiltrosActionTypes.LoadFiltroMinima;
  constructor(public payload: { dado: any} ){}
}


export type FiltrosActions = LoadFiltroMinima;
