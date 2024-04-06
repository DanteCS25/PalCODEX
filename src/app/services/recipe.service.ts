import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventory } from '../models/userinv.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  private baseURL = "http://localhost:3000/recipe/distinct"
  private userURL = "http://localhost:3000/inventory";
  private craftURL = "http://localhost:3000/craftinv"

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseURL)
  }

  //Get recipe by name -> need to display ingridients of recipe when view.
  getSingleRecipe(name: string): Observable<Recipe[]> {
    console.log(name)
    return this.http.get<Recipe[]>(`http://localhost:3000/recipe/${name}`);
  }

  getAllUserinvById(status: string): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(`${this.userURL}/user/${status}`);
  }

  cratfRecipe(recipe: Recipe, inventory: Inventory[]): Observable<Recipe> {
    var craftUrl = "http://localhost:3000/recipe/" + recipe.craft_name + "/craft";
    return this.http.put<Recipe>(craftUrl, { recipe: recipe.craft_name, inventory: inventory });
  }

  sendRecipeToCraftInventory(profile_id: number, craft_name: string): Observable<any> {
    window.location.reload();
    console.log(profile_id)
    return this.http.put(`http://localhost:3000/craftinv/${profile_id}`, { profile_id, craft_name});
  }
}