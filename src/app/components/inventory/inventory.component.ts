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

  materialList: Materials[] = [
    // {
    //   id: 1,
    //   material_name: "Beautiful Flower",
    //   material_amount: 10000
    // },
    // {
    //   id: 2,
    //   material_name: "Berry Seeds",
    //   material_amount: 10000
    // },
    // {
    //   id: 3,
    //   material_name: "Carbon Fiber",
    //   material_amount: 10000
    // },
    // {
    //   id: 4,
    //   material_name: "Cement",
    //   material_amount: 10000
    // },
    // {
    //   id: 5,
    //   material_name: "Charcoal",
    //   material_amount: 10000
    // },
    // {
    //   id: 6,
    //   material_name: "Circuit Board",
    //   material_amount: 10000
    // },
    // {
    //   id: 7,
    //   material_name: "Cloth",
    //   material_amount: 10000
    // },
    // {
    //   id: 8,
    //   material_name: "Electric Organ",
    //   material_amount: 10000
    // },
    // {
    //   id: 9,
    //   material_name: "Fiber",
    //   material_amount: 10000
    // },
    // {
    //   id: 10,
    //   material_name: "Flame Organ",
    //   material_amount: 10000
    // },
    // {
    //   id: 11,
    //   material_name: "High Quality Cloth",
    //   material_amount: 10000
    // },
    // {
    //   id: 12,
    //   material_name: "High Quality Pal Oil",
    //   material_amount: 10000
    // },
    // {
    //   id: 13,
    //   material_name: "Ice Organ",
    //   material_amount: 10000
    // },
    // {
    //   id: 14,
    //   material_name: "Ingot",
    //   material_amount: 10000
    // },
    // {
    //   id: 15,
    //   material_name: "Nail",
    //   material_amount: 10000
    // },
    // {
    //   id: 16,
    //   material_name: "Pal Fluids",
    //   material_amount: 10000
    // },
    // {
    //   id: 17,
    //   material_name: "Paldium Fragment",
    //   material_amount: 10000
    // },
    // {
    //   id: 18,
    //   material_name: "Polymer",
    //   material_amount: 10000
    // },
    // {
    //   id: 19,
    //   material_name: "Refined Ingot",
    //   material_amount: 10000
    // },
    // {
    //   id: 20,
    //   material_name: "Stone",
    //   material_amount: 10000
    // },
    // {
    //   id: 21,
    //   material_name: "Tomato Seeds",
    //   material_amount: 10000
    // },
    // {
    //   id: 22,
    //   material_name: "Wheat Seeds",
    //   material_amount: 10000
    // },
    // {
    //   id: 23,
    //   material_name: "Wood",
    //   material_amount: 10000
    // },
    // {
    //   id: 24,
    //   material_name: "Wool",
    //   material_amount: 10000
    // }
  ]

  ngOnInit() {
    this.service.getAllMaterials().subscribe((data) => {
      console.log(data);
      this.materialList = data;
    })
  }

}
