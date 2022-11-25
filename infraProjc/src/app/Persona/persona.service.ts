import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Persona } from '../Modelo/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
// private apiURL = "http://infraestruct.b:8080/usuario/";

//  private apiURL = "http://bkinfraproj2.test/api/personas/";
  private apiURL = "http://25.78.207.146/bkinfraproj2/public/api/personas/";
  //URL sin diagonal
private apiURLsd=this.apiURL.substr(0, this.apiURL.length - 1);
  

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Persona[]> {
    
   return this.httpClient.get<Persona[]>(this.apiURLsd)//URL SIN DIAGONAL
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(persona: Persona): Observable<Persona> {
   return this.httpClient.post<Persona>(this.apiURLsd, JSON.stringify(persona), this.httpOptions)//URL SIN DIAGONAL
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id: number): Observable<Persona> {
   return this.httpClient.get<Persona>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id: number, persona: any): Observable<Persona> {
   return this.httpClient.put<Persona>(this.apiURL + id, JSON.stringify(persona), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id: number){
   return this.httpClient.delete<Persona>(this.apiURL + id, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     errorMessage = error.error.message;
   } else {
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   return throwError(errorMessage);
 }

}