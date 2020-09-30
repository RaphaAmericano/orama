import { Action } from '@ngrx/store';
import { FundoActionTypes } from './fundo.types.enum';
export class LoadFundos implements Action {
    readonly type = FundoActionTypes.LoadFundos;
}

export class GetFundos implements Action {
    readonly type = FundoActionTypes.GetFundos;
}

export class SaveFundos implements Action {
    readonly type = FundoActionTypes.SaveFundos;
    constructor(public payload: any ){}
}

export class SaveFundosBase implements Action {
    readonly type = FundoActionTypes.SaveFundosBase;
    constructor(public payload: any ){}
}

export type FundoActions = GetFundos | LoadFundos | SaveFundos | SaveFundosBase;