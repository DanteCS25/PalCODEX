import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    // other routes...
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    // other routes...
];
