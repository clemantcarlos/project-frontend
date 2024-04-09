import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  url:string = 'http://localhost:3000/config/'

  constructor(private http:HttpClient) { }

  getGenero(){
    return this.http.get<any>(this.url+'genero');
  }
  getTurno(){
    return this.http.get<any>(this.url+'turno');
  }
  getGradoAcademico(){
    return this.http.get<any>(this.url+'gradoAcademico');
  }
  getTipoPersonal(){
    return this.http.get<any>(this.url+'tipoPersonal');
  }
  getGradoEscolar(){
    return this.http.get<any>(this.url+'gradoEscolar');
  }
  getSeccion(){
    return this.http.get<any>(this.url+'seccion');
  }

  createGenero(input:any){
    return this.http.post<any>(
      this.url+'genero',
      input,
      { headers:{'Context-Type':'application/json'} }
    );
  }
  createTurno(input:any){
    return this.http.post<any>(
      this.url+'turno',
      input,
      { headers:{'Context-Type':'application/json'} }
    );
  }
  createGradoAcademico(input:any){
    return this.http.post<any>(
      this.url+'gradoAcademico',
      input,
      { headers:{'Context-Type':'application/json'} }
    );
  }
  createGradoEscolar(input:any){
    return this.http.post<any>(
      this.url+'gradoEscolar',
      input,
      { headers:{'Context-Type':'application/json'} }
    );
  }
  createTipoPersonal(input:any){
    return this.http.post<any>(
      this.url+'tipoPersonal',
      input,
      { headers:{'Context-Type':'application/json'} }
    );
  }
  createSeccion(input:any){
    return this.http.post<any>(
      this.url+'seccion',
      input,
      { headers:{'Context-Type':'application/json'} }
    );
  }

  // DELETE

  deleteGenero(input:any){
    return this.http.delete<any>(
      this.url+`genero/${input}`
    );
  }
  deleteTurno(input:any){
    return this.http.delete<any>(
      this.url+`turno/${input}`
    );
  }
  deleteGradoAcademico(input:any){
    return this.http.delete<any>(
      this.url+`gradoAcademico/${input}`
    );
  }
  deleteGradoEscolar(input:any){
    return this.http.delete<any>(
      this.url+`gradoEscolar/${input}`
    );
  }
  deleteTipoPersonal(input:any){
    return this.http.delete<any>(
      this.url+`tipoPersonal/${input}`
    );
  }
  deleteSeccion(input:any){
    return this.http.delete<any>(
      this.url+`seccion/${input}`
    );
  }
}
