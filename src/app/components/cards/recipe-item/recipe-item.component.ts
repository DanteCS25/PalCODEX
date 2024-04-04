import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CraftinvService } from '../../../services/craftinv.service';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {

  @Input() item: any = {
    id: 0,
    craft_name: "assets/materials/Coal.png",
    material_req: "Dummy",
    material_amount: 10000,
    status: "Novice"
  }

}
