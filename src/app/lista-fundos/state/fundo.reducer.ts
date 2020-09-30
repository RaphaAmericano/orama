import { FundoActions } from './fundo.actions';
import { FundoState } from './fundo.state.app';
import { FundoActionTypes } from './fundo.types.enum';

const initialState: FundoState = {
    fundos: null,
    fundos_base: null
}
export function reducer(state = initialState, action: FundoActions ): FundoState {
    switch (action.type){
        case FundoActionTypes.LoadFundosBase:
            return {
                ...state,
                fundos_base: action.payload.dado
            }
        case FundoActionTypes.LoadFundos:
            return {
                ...state,
                fundos: action.payload.dado
            }
        default:
            return state;
    }
}