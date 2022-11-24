import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//MODELOS propios
import { Persona } from 'src/app/Modelo/persona';

const baseUrl = 'http://bkinfraproj2.test/personas/';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'aplication/json'
  })
}

  constructor(private http: HttpClient) { }
  getAll(): Observable<Persona[]> {
    return this.http.get<Persona[]>(baseUrl);
  }

  get(id: number): Observable<any> {// persona hhabi adentro de <>
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${baseUrl}?title=${title}`);
  }
}
