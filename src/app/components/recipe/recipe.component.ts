import { Component } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeItemComponent } from '../cards/recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule, RecipeItemComponent, ReactiveFormsModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {

  constructor(private service: RecipeService) { }

  recipeList: any[] = []
  selectedRecipe: Recipe[] | null = null

  ngOnInit() {
    this.service.getAllRecipes().subscribe((data) => {
      console.log(data);
      this.recipeList = data;
      console.log(this.recipeList);
    })
  }

  getRecipe(recipeName: string) {
    this.service.getSingleRecipe(recipeName).subscribe(data => {
      console.log(data)
      this.selectedRecipe = data; // Assuming the data is an array and you're interested in the first item
    });
  }

}
