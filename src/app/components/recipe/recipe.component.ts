import { Recipe } from '../../models/recipe.model';
import { Inventory } from '../../models/userinv.model';
import { Component } from '@angular/core'; // Added import statement for Component decorator
import { RecipeService } from '../../services/recipe.service';
import { AuthService } from '../../services/auth.service';

@Component({ // Added @Component decorator
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})

export class RecipeComponent {
  selectedItem: Recipe | null = null; // Existing line

  constructor(private service: RecipeService, private authService: AuthService) { }

  recipeList: any[] = []
  selectedRecipe: Recipe[] | null = null
  userinvList: Inventory[] = [];
  selectedRec: Recipe = {craft_name: '', material_req: '', material_amount: 0, status_req: '', isCraftable: false};

  ngOnInit() {
    this.service.getAllRecipes().subscribe((data) => {
      // console.log(data);
      this.recipeList = data;
      // console.log(this.recipeList);
      this.getUserInventory()
    })
  }

  getRecipe(recipeName: string) {
    this.service.getSingleRecipe(recipeName).subscribe(data => {
      // console.log("getRecipe")
      // console.log(data)
      this.selectedRecipe = data; // Assuming the data is an array and you're interested in the first item
      this.checkCraftability()
    });
  }

  
  showItemDetails(item: Recipe) {
    this.selectedItem = item; // Set the selected item
  }

  getUserInventory() {
    const userId = JSON.parse(this.authService.getUserStatus());
    // console.log(userId.id)
    this.service.getAllUserinvById(userId.id).subscribe((data) => {
      // console.log("getUserInventory")
      // console.log(data)
      this.userinvList = data;
    });
  }

  checkCraftability() {
    //Default, we assume we have enough ingredients.
    this.selectedRec!.isCraftable = true
    // console.log("checkCraftability")
    // console.log(this.selectedRec.isCraftable)
    // console.log(this.selectedRecipe)
    // console.log(this.userinvList)
    //Loop through to see if we have enough
    this.selectedRecipe!.forEach((ingredient) => {
      // console.log(ingredient.material_amount)
      this.userinvList.forEach((userinv) => {
        // console.log(userinv.material_amount)
        var matName = userinv.material_name
        var craftName = ingredient.material_req
        // console.log(matName)
        // console.log(craftName)
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

  //When clicking on craft
//   craftNewRecipe(recipe: Recipe) {
//     if (this.selectedRecipe![0].craft_name  == recipe.craft_name) {
//       //Call our service function
//       console.log(this.userinvList)
//       console.log(this.selectedRecipe![0].craft_name)
//       // this.service.cratfRecipe(recipe, this.userinvList).subscribe()
//     }
//   }
// }

sendRecipeToCraftInventory(item: Recipe) {
  console.log(item)
  if (item && item.id) { // Updated to use safe navigation operator
    // const userId = this.authService.getUserId(); // Assuming you have a method to get the current user's ID
    const userId = sessionStorage.getItem('user')
    const id = JSON.parse(userId!)
    console.log(item.id)
    this.service.sendRecipeToCraftInventory( id.id, item.craft_name??0).subscribe(() => {
      console.log('Material sent to user inventory');
      // Optionally, refresh your materials and user inventory list here
    });
  }
}}

