import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { personalInterface } from '../../interfaces/personal';

@Injectable({
  providedIn: 'root'
})

export class ApiServicePersonal {
  constructor(private http:HttpClient) { }

  get():Observable<personalInterface[]>{
    const url = 'http://localhost:3000/personal'
    return this.http.get<personalInterface[]>(url);
  }
  post(personal:personalInterface):Observable<any>{
    const url = 'http://localhost:3000/personal'
    return this.http.post<any>(
      url,
      personal,
      { headers:{'Context-Type':'application/json'} }
    );
  }
  delete(id:string):Observable<any>{
    const url = `http://localhost:3000/personal/${id}`
    return this.http.delete<any>(url)
  }
} 