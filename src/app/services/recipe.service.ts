import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) { }

  private baseURL = "http://localhost:3000/recipe"

  getAllRecipes(): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.baseURL)
  }

}
