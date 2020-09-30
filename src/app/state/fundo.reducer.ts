import { FundoActions } from './fundo.actions';
import { FundoState } from './fundo.state.app';
import { FundoActionTypes } from './fundo.types.enum';

const initialState: FundoState = {
    fundos: null,
    fundos_base: null
};

export function reducer(state = initialState, action: FundoActions ): FundoState {
    switch (action.type){
        case FundoActionTypes.SaveFundosBase:
            return {
                ...state,
                fundos_base: action.payload
            }

        case FundoActionTypes.SaveFundos:
            return {
                ...state,
                fundos: action.payload
            }
        default:
            return state;
    }
};