import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ApiResult{
  id:string;
  nombre:string;
  apelliddo:string;
  direccion:string;
  email:string;
  fecha_nacimiento:string;
  cedula:number;
  cedula_tipo:string;
  telefono:number;
  rif:number;
  rif_tipo:string;
  id_tipo_personal:number;
  id_grado_academico:number;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  baseUrl:string = 'https://escuela-api-production.up.railway.app'
  constructor(private http:HttpClient) { }

  get():Observable<any>{
    return this.http.get<ApiResult>(
      `${this.baseUrl}/personal`!
    );
  }
}
