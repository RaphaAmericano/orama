import { FiltrosActionTypes } from './filtro.types.enum';
import { FiltrosState } from './filtro.state.app';
import { FiltrosActions } from './filtro.actions';
const initialState: FiltrosState = {
  minima: null,
  busca: '',
  prazo: null,
  risco: null,
  checkbox: null,
  erro: ''
}

export function reducer(state = initialState, action: FiltrosActions ): FiltrosState {

  switch (action.type){
    case FiltrosActionTypes.NewFiltroMinima:
      return {
        ...state,
        minima: action.payload.dado
      };
    case FiltrosActionTypes.ErroFiltroMinima:
      return {
        ...state,
        minima: null,
        erro: action.payload
      }
    case FiltrosActionTypes.NewFiltroPrazo:
      return {
        ...state,
        prazo: action.payload.dado
      }
    case FiltrosActionTypes.ErroFiltroPrazo:
      return {
        ...state,
        prazo: null,
        erro: action.payload
      }
    case FiltrosActionTypes.LoadFiltroBusca:
      return {
        ...state,
        busca: action.payload.dado
      }
    case FiltrosActionTypes.NewFiltroCheckbox:
      return {
        ...state,
        checkbox: action.payload
      }
    case FiltrosActionTypes.NewFiltroRisco:
      return {
        ...state,
        risco: action.payload
      }
    case FiltrosActionTypes.ErroFiltroRisco:
      return {
        ...state,
        erro: 'Não foi possível atualizar o estado do filtro de risco'
      }
    default:
      return state;
  }
};
