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
}
