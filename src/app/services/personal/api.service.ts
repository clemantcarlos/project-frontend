import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { personalInterface } from '../../interfaces/personal';
import { sortingInterface } from '../../interfaces/sorting';

@Injectable({
  providedIn: 'root'
})

export class ApiServicePersonal {
  constructor(private http:HttpClient) { }

  get():Observable<personalInterface[]>{
    const url = 'https://escuela-api-production.up.railway.app/personal'
    return this.http.get<personalInterface[]>(url);
  }
} 