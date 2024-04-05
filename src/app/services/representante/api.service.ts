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
  post(representante:representanteInterface):Observable<any>{
    const url = 'https://escuela-api-production.up.railway.app/representante'
    return this.http.post<any>(
      url,
      representante,
      { headers:{'Context-Type':'application/json'} }
    );
  }
  delete(id:string):Observable<any>{
    const url = `https://escuela-api-production.up.railway.app/representante/${id}`
    return this.http.delete<any>(url)
  }
}
