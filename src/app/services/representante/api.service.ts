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
    let url = 'http://localhost:3000/representante'
    if (cedulaChild) url+=`?cedulaParent=${cedulaChild}`
    return this.http.get<representanteInterface[]>(url);
  }
  post(representante:representanteInterface):Observable<any>{
    const url = 'http://localhost:3000/representante'
    return this.http.post<any>(
      url,
      representante,
      { headers:{'Context-Type':'application/json'} }
    );
  }
  delete(id:string):Observable<any>{
    const url = `http://localhost:3000/representante/${id}`
    return this.http.delete<any>(url)
  }
}
