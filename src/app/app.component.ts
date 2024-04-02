import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InventoryComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PalCODEX';

  constructor(private service: AuthService){}

  public isLoggedIn = false
  ngOnInit(){
    //check if user is logged in
    this.checkLoginState()
  }

  checkLoginState(){
    
  }

}

//AppComponent is our main entry point

//TODO: 
//DONE
//0. Login Component
//DONE
//1. Create Our Auth Service - Connect to endpoints
//DONE
//1.1 Save users info to the sessionStorage 

//2. Create an Auth Gaurd - protects our routs from invalid users

//3. Create Admin Gaurd - only admin can view crafting

//4. Update the Navigation UI, based on if the user is logged in or not