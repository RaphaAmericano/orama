import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap, } from 'rxjs/operators';
import { DatabaseService } from 'src/app/core/services/database.service';
import { FiltrosActionTypes } from './filtro.types.enum';
import * as fromFundo from '../../state/index';
import * as fromFiltro from './index';
import * as fundoActions from '../../state/fundo.actions';
import * as actions from './filtro.actions';
import { Fundo } from 'src/app/core/models/fundo.model';

@Injectable()
export class FiltroEffects {
    constructor(
        private actions$: Actions,
        private store: Store,
        private databaseService: DatabaseService){}

}