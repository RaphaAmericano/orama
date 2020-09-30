import { Action } from '@ngrx/store';
import { FundoActionTypes } from './fundo.types.enum';

export class LoadFundosBase implements Action {
    readonly type = FundoActionTypes.LoadFundosBase;
    constructor(public payload: { dado: any } ){}
}
export class LoadFundos implements Action {
    readonly type = FundoActionTypes.LoadFundos;
    constructor(public payload: { dado: any } ){}
}

export type FundoActions = LoadFundosBase | LoadFundos;