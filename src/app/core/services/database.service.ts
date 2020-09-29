import { Fundo } from './../models/fundo.model';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, switchMap, tap, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private immutableData$: Observable<Fundo[]>;
  public data$: Observable<Fundo[]>;

  constructor(private http: HttpClient ) {
    this.immutableData$ = this.http.get<Fundo[]>(environment.api).pipe(
      switchMap( (fundos: object[] ) => {
        return fundos.map((fundo) => {
          return Object.assign(new Fundo(), fundo);
        });
      }),
      toArray(),
      switchMap( (fundos: Fundo[]) => {
        return fundos.sort( (a, b) => {
            if (a.benchmark.id >= b.benchmark.id){
              return 1;
            }
            else if (a.benchmark.id < b.benchmark.id){
              return -1;
            }
        });
      }),
      toArray()
    );
    this.data$ = this.immutableData$;
  }

  public getImmutableData(): Observable<Fundo[]>{
    return this.immutableData$;
  }

}