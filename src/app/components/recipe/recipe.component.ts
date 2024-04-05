import { Component } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeItemComponent } from '../cards/recipe-item/recipe-item.component';
import { Inventory } from '../../models/userinv.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule, RecipeItemComponent, ReactiveFormsModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {

  constructor(private service: RecipeService, private authService: AuthService) { }

  recipeList: any[] = []
  selectedRecipe: Recipe[] | null = null
  userinvList: Inventory[] = [];
  selectedRec: Recipe = {craft_name: '', material_req: '', material_amount: 0, status_req: '', isCraftable: false};

  ngOnInit() {
    this.service.getAllRecipes().subscribe((data) => {
      console.log(data);
      this.recipeList = data;
      console.log(this.recipeList);
      this.getUserInventory()
    })
  }

  getRecipe(recipeName: string) {
    this.service.getSingleRecipe(recipeName).subscribe(data => {
      console.log("getRecipe")
      console.log(data)
      this.selectedRecipe = data; // Assuming the data is an array and you're interested in the first item
      this.checkCraftability()
    });
  }

  getUserInventory() {
    const userId = JSON.parse(this.authService.getUserStatus());
    console.log(userId.id)
    this.service.getAllUserinvById(userId.id).subscribe((data) => {
      console.log("getUserInventory")
      console.log(data)
      this.userinvList = data;
    });
  }

  checkCraftability() {
    //Default, we assume we have enough ingredients.
    this.selectedRec!.isCraftable = true
    console.log("checkCraftability")
    console.log(this.selectedRec.isCraftable)
    console.log(this.selectedRecipe)
    console.log(this.userinvList)
    //Loop through to see if we have enough
    this.selectedRecipe!.forEach((ingredient) => {
      console.log(ingredient.material_amount)
      this.userinvList.forEach((userinv) => {
        console.log(userinv.material_amount)
        var matName = userinv.material_name
        var craftName = ingredient.material_req
        console.log(matName)
        console.log(craftName)
        if (matName == craftName) {
          //if any ingredient is not enough, set craftable to false
          if (ingredient.material_amount > userinv.material_amount) {
            this.selectedRec.isCraftable = false
            console.log("Not Craftable" + userinv.material_name)
            return; //stop when any of the ingredients is not enough.
          }
        }
      })
    })
  }
}
