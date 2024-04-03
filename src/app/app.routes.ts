import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { UserinvComponent } from './components/userinv/userinv.component';
import { CraftinvComponent } from './components/craftinv/craftinv.component';
import { RecipeComponent } from './components/recipe/recipe.component';

export const routes: Routes = [
    // other routes...
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'materials', component: InventoryComponent },
    { path: 'inventory', component: UserinvComponent },
    { path: 'recipe', component: RecipeComponent },
    { path: 'craftinv', component: CraftinvComponent },
    { path: "", redirectTo: "home", pathMatch: "full" }
    // other routes...
];
