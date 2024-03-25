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
    profile_id: 0 // Add this line with an appropriate default value
  }
  @Output() itemSelected = new EventEmitter<Materials>();

  constructor(private service: MaterialsService) { }

  onItemSelect() {
    this.itemSelected.emit(this.item);
  }

}
