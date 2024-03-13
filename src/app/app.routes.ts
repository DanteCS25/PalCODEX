import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { UserinvComponent } from './components/userinv/userinv.component';

export const routes: Routes = [
    // other routes...
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'materials', component: InventoryComponent },
    { path: 'inventory', component: UserinvComponent },
    { path: "", redirectTo: "home", pathMatch: "full" }
    // other routes...
];
