import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { InventoryComponent } from './components/inventory/inventory.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InventoryComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PalCODEX';
}

@Component({
  declarations: [
    // Your components
  ],
  imports: [
    // Other necessary modules
    MatFormFieldModule, // Add MatFormFieldModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }