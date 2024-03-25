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
}