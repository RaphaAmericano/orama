import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private immutableData$: Observable<any>;

  constructor(private http: HttpClient ) {
    this.immutableData$ = this.http.get(environment.api).pipe(
      tap(val => console.log(val))
    )
  }

  // private handleError() {

  // }

}
