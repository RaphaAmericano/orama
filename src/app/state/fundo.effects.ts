import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { DatabaseService } from 'src/app/core/services/database.service';
import * as actions from './fundo.actions';
import { FundoActionTypes } from './fundo.types.enum';
@Injectable()
export class FundoEffects {
    constructor(private databaseService: DatabaseService, private actions$: Actions ){}

    @Effect()
    saveFundosImmatable$: Observable<Action> = this.actions$.pipe(
        ofType(FundoActionTypes.LoadFundos),
        mergeMap( action =>
            this.databaseService.getData().pipe(
                map(fundos => new actions.SaveFundosBase(fundos))
            )
        )
    );

    @Effect()
    saveFundos$: Observable<Action> = this.actions$.pipe(
        ofType(FundoActionTypes.LoadFundos),
        mergeMap( action =>
            this.databaseService.getData().pipe(
                map(fundos => new actions.SaveFundos(fundos))
            )
        )
    );

};