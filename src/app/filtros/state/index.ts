import { FiltrosState } from './filtro.state.app';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State{
  filtros: FiltrosState;
}

const getFiltrosFeatureState = createFeatureSelector<FiltrosState>('filtros');

export const getFiltros = createSelector(
  getFiltrosFeatureState,
  state => state
);

export const getFiltroMinima = createSelector(
  getFiltrosFeatureState,
  state => state.minima
);

export const getFiltroBusca = createSelector( 
  getFiltrosFeatureState,
  state => state.busca
)

export const getFilroCheckboxNivel1 = createSelector(
  getFiltrosFeatureState,
  state => state.checkbox
)