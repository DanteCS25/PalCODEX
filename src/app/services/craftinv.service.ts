import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Craftinv } from '../models/craftinv.model';

@Injectable({
  providedIn: 'root'
})
export class CraftinvService {

  constructor(private http:HttpClient) { }

  private baseURL = "http://localhost:3000/craftinv"

  getAllCraftinv(): Observable<Craftinv[]>{
    return this.http.get<Craftinv[]>(this.baseURL)
  }

}
