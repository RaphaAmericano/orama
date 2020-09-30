import { Fundo } from 'src/app/core/models/fundo.model';

export interface FundoState {
    fundos: Fundo[];
    fundos_base: Fundo[];
}