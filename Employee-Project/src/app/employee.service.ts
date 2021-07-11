import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './IEmployee';
// import { catchError } from 'rxjs/operators';
// import { throwError } from 'rxjs';
@Injectable()
export class EmployeeService {
  private _url: string = 'assets/data/flight.json';
  constructor(private http: HttpClient) {}
  public getEmployeeHttp(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url + '/fetch-all-employee');
    // .pipe(catchError(this.errorHandler))
  }
  /*errorHandler(error: HttpErrorResponse) {
    return throwError (error.message||"Server Error");
    ;
  }*/

}
