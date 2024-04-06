import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Craftinv } from '../models/craftinv.model';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class CraftinvService {

  constructor(private http:HttpClient) { }

  private baseURL = "http://localhost:3000/craftinv"

  getAllCraftinv(): Observable<Craftinv[]>{
    return this.http.get<Craftinv[]>(this.baseURL)
  }

  updateCraftinv(item: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.baseURL}/${item.id}`, item);
  }
}
