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

  constructor(private service: MaterialsService) { }

  materialList: Materials[] = []

  ngOnInit() {
    this.service.getAllMaterials().subscribe((data) => {
      console.log(data);
      this.materialList = data;
    })
  }

}
