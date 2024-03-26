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

  constructor(private service: MaterialsService) {}

  ngOnInit() {
    this.service.getAllMaterials().subscribe((data) => {
      console.log(data);
      this.materialList = data;
    });
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
        // Optionally, refresh your materials list here
      });
    }
  }

  removeFromCart(item: Materials) {
    item.material_count = (item.material_count || 0) - 1;
    // Update the view or cart count as needed
  }
}