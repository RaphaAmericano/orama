import { FiltrosActionTypes } from './filtro.types.enum';
import { FiltrosState } from './filtro.state.app';
import { FiltrosActions } from './filtro.actions';
const initialState: FiltrosState = {
  minima: null,
  busca: null
}

export function reducer(state = initialState, action: FiltrosActions ): FiltrosState {

  switch (action.type){
    case FiltrosActionTypes.NewFiltroMinima:
      return {
        ...state,
        minima: action.payload.dado
      };
    case FiltrosActionTypes.LoadFiltroBusca:
      return {
        ...state,
        busca: action.payload.dado
      }
    default:
      return state;
  }
};
