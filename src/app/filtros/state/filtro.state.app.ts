export interface FiltrosState {
  minima: number;
  busca: string;
  prazo: number;
  checkbox: {id: number, nome: string, check: boolean, tipos: any[] }[];
  erro: string;
}
