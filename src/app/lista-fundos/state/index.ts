import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../state/app.state';
import { FundoState } from './fundo.state.app';

export interface State extends fromRoot.State {
    fundos: FundoState;
}

const getFundoFeatureState = createFeatureSelector<FundoState>('fundos');

export const getFundos = createSelector(
    getFundoFeatureState,
    state => state.fundos
);
export const getFundosBase = createSelector(
    getFundoFeatureState,
    state => state.fundos_base
)