import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap, } from 'rxjs/operators';
import { DatabaseService } from 'src/app/core/services/database.service';
import { FiltrosActionTypes } from './filtro.types.enum';
import * as fromFundo from '../../lista-fundos/state/index';
import * as fundoActions from '../../lista-fundos/state/fundo.actions';
import { Fundo } from 'src/app/core/models/fundo.model';

@Injectable()
export class FiltroEffects {
    constructor(
        private actions$: Actions,
        private store: Store,
        private databaseService: DatabaseService){}

    @Effect()
    filtraFundos$: Observable<any> = this.actions$.pipe(
        ofType(FiltrosActionTypes.LoadFiltroBusca),
        tap(val => console.log(val)),
        map((action:{ payload: { dado: string }} ) => {
            this.store.pipe(select(fromFundo.getFundos)).subscribe(
                fundos => {
                    // criar um if/else para o caso de ser vazio pular ou apagar
                    const searchStr = action.payload.dado;
                    const newState = fundos.filter(
                        (fundo: Fundo) => {
                            return fundo.simple_name.indexOf(searchStr) >= 0 ;
                        }
                    );
                    console.log(newState);
                    return (new fundoActions.SaveFundos(newState));
                }
            );
        
        })
    )
}