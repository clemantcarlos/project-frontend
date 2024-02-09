import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { representanteInterface } from '../../interfaces/representante';



@Injectable({
  providedIn: 'root'
})

export class ApiServiceRepresentante {
  constructor(private http:HttpClient) { }

  get(cedulaChild?:number):Observable<representanteInterface[]>{
    let url = 'https://escuela-api-production.up.railway.app/representante'
    if (cedulaChild) url+=`?cedulaParent=${cedulaChild}`
    return this.http.get<representanteInterface[]>(url);
  }
}
