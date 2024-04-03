import { Component } from '@angular/core';
import { MaterialsService } from '../../services/materials.service';
import { Materials } from '../../models/materials.model';
import { InventoryItemComponent } from '../cards/inventory-item/inventory-item.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, InventoryItemComponent, ReactiveFormsModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  materialList: Materials[] = [];
  selectedItem: Materials | null = null; // To store the selected item details
  isAdmin: boolean = false; // Add this line

  constructor(private service: MaterialsService) {}

  ngOnInit() {
    this.service.getAllMaterials().subscribe((data) => {
      console.log(data);
      this.materialList = data;
    });
    this.checkIfAdmin(); // Add a call to check admin status
  }

  showItemDetails(item: Materials) {
    this.selectedItem = item; // Set the selected item
  }

  addToCraftCart(item: Materials) {
    item.material_count = (item.material_count || 0) + 1;
    // Update the view or craft cart count as needed
  }

  sendMaterial(item: Materials) {
    if (typeof item.id === 'number' && item.material_count) {
      const newAmount = item.material_amount - item.material_count; // Updated calculation
      this.service.updateMaterialAmount(item.id, newAmount).subscribe(() => {
        item.material_amount = newAmount; // Update the local item amount
        item.material_count = 0; // Reset the count after sending
        this.service.getAllMaterials().subscribe((data) => { // Refresh the materials list
          this.materialList = data;
        });
      });
    }
  }

  removeFromCart(item: Materials) {
    item.material_count = (item.material_count || 0) - 1;
    // Update the view or cart count as needed
  }

  // Add a method to check if the user is an admin
  checkIfAdmin() {
    // Implement your logic to determine if the user is an admin
    // For example, this could involve checking a service or local storage
    this.isAdmin = true; // Set based on your auth logic
  }

  updateMaterialAmount() {
    if(this.selectedItem && this.selectedItem.id) {
      this.service.updateMaterialAmount(this.selectedItem.id, this.selectedItem.material_amount)
        .subscribe({
          next: (response) => {
            // Handle successful update
            this.service.getAllMaterials().subscribe((data) => { // Refresh the materials list
              this.materialList = data;
            });
          },
          error: (error) => {
            // Handle error
          }
        });
    }
  }

  increaseMaterialAmount(item: Materials) {
    if (item && item.id) {
      item.material_amount += 1; // Increase the amount
      // Call your service method to update the material amount in the backend
      this.service.updateMaterialAmount(item.id, item.material_amount).subscribe(() => {
        console.log('Material amount increased');
        // Optionally, refresh your materials list here
      });
    }
  }
}