import { Component } from '@angular/core';
import { Inventory } from '../../models/userinv.model';
import { UserinvService } from '../../services/userinv.service';
import { UserinvItemComponent } from '../cards/userinv-item/userinv-item.component';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userinv',
  standalone: true, // Add this line to mark the component as standalone
  imports: [UserinvItemComponent, CommonModule], // Ensure this line is present
  templateUrl: './userinv.component.html',
  styleUrls: ['./userinv.component.css']
})

export class UserinvComponent {
  filteredItems: Inventory[] = [];
  selectedItem: Inventory = {} as Inventory;
  userinvList: Inventory[] = [];

  constructor(private service: UserinvService, private authService: AuthService) { }

  ngOnInit() {
    const userId = JSON.parse(this.authService.getUserStatus());
    console.log(userId.id)
    this.service.getAllUserinvByStatus(userId.id).subscribe((data) => {
      console.log(data)
      this.userinvList = data;
    });
  }

  saveToDatabase(): void {
    this.service.updateUserinv(this.selectedItem).subscribe({
      next: (updatedItem) => {
        console.log('Update successful', updatedItem);
        this.ngOnInit(); // Refresh the inventory list
      },
      error: (error) => {
        console.error('Update failed', error);
      }
    });
  }

  searchMaterial(searchTerm: string) {
    this.filteredItems = this.userinvList.filter(item => item.material_name.toLowerCase().includes(searchTerm.toLowerCase()) && item.status === this.authService.getUserStatus());
  }

  onItemViewDetails(item: Inventory): void {
    this.selectedItem = item;
    // Populate edit section (assuming you have a method or direct binding)
  }
}