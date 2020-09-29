import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, tap, } from 'rxjs/operators';
import { DatabaseService } from 'src/app/core/services/database.service';
import { FiltrosActionTypes } from './filtro.types.enum';
import { Fundo } from 'src/app/core/models/fundo.model';

@Injectable()
export class FiltroEffects {
    constructor(private actions$: Actions, private databaseService: DatabaseService){}

    @Effect()
    filtraFundos$: Observable<any> = this.actions$.pipe(
        ofType(FiltrosActionTypes.LoadFiltroBusca),
        tap(val => console.log(val))
    )
}