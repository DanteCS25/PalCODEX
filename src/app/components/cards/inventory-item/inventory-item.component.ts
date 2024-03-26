import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Materials } from '../../../models/materials.model';
import { MaterialsService } from '../../../services/materials.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-inventory-item',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './inventory-item.component.html',
  styleUrl: './inventory-item.component.css'
})
export class InventoryItemComponent {

  @Input() item: Materials = {
    id: 0,
    material_icon: "assets/materials/Coal.png",
    material_name: "Dummy",
    material_amount: 10000,
    profile_id: 0, // Add this line with an appropriate default value
    material_count: 0 // Added based on instructions for handling cart functionality
  }
  @Output() itemSelected = new EventEmitter<Materials>();
  @Output() sendRequest = new EventEmitter<Materials>();

  constructor(private service: MaterialsService) { }

  addToCart() {
    this.item!.material_count = (this.item!.material_count || 0) + 1;
    this.itemSelected.emit(this.item); // Optional: Emit the updated item
  }

  removeFromCart() {
    if (this.item?.material_count && this.item.material_count! > 0) {
      this.item.material_count! -= 1;
      this.itemSelected.emit(this.item); // Optional: Emit the updated item
    }
  }

  onItemSelect() {
    this.itemSelected.emit(this.item);
  }

}
