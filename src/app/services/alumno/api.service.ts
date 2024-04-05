import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { alumnoInterface } from '../../interfaces/alumno';


@Injectable({
  providedIn: 'root'
})

export class ApiServiceAlumno {
  constructor(private http:HttpClient) { }

  get(cedulaParent?:number):Observable<alumnoInterface[]>{
    let url = 'https://escuela-api-production.up.railway.app/alumno'
    if(cedulaParent) url+=`?cedulaParent=${cedulaParent}`
    return this.http.get<alumnoInterface[]>(url);
  }
  post(alumno:alumnoInterface):Observable<any>{
    const url = 'https://escuela-api-production.up.railway.app/alumno'
    return this.http.post<any>(
      url,
      alumno,
      { headers:{'Context-Type':'application/json'} }
    );
  }
  delete(id:string):Observable<any>{
    const url = `https://escuela-api-production.up.railway.app/alumno/${id}`
    return this.http.delete<any>(url)
  }
}
