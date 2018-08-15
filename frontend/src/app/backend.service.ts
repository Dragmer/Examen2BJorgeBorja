import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, mergeMap, take, filter } from 'rxjs/operators';

import {Empleado} from "./empleado";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private empleadoUrl = 'http://localhost:1337/empleado';
  private pacienteUrl = 'http://localhost:1337/paciente';
  private medicamentoUrl = 'http://localhost:1337/medicamento';

  constructor(private http: HttpClient) { }

  /** Empleado */

  getEmpleado(id: number): Observable<Empleado> {
    const url = `${this.empleadoUrl}/${id}`;
    return this.http.get<Empleado>(url)
      .pipe(
        catchError(this.handleError<Empleado>(`getEmpleado id=${id}`))
      );
  }

  getEmpleados (): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.empleadoUrl)
      .pipe(
        catchError(this.handleError('getEmplados', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
    private log(message: string) {
      console.log(message);
    }
}
