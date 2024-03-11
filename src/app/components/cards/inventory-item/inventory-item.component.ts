import { Component, Input } from '@angular/core';
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

  constructor(private service: MaterialsService) { }

  //add all behaviour and variables
  @Input() item: Materials = {
    id: 0,
    material_icon: "assets/materials/Coal.png",
    material_name: "Dummy",
    material_amount: 10000
  }

}
