import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Inventory } from '../../models/userinv.model';
import { UserinvService } from '../../services/userinv.service';
import { UserinvItemComponent } from '../cards/userinv-item/userinv-item.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-userinv',
  standalone: true,
  imports: [CommonModule, UserinvItemComponent, ReactiveFormsModule],
  templateUrl: './userinv.component.html',
  styleUrl: './userinv.component.css'
})

export class UserinvComponent {
  filteredItems: Inventory[] = [];
  selectedItem: Inventory = {} as Inventory;
  userinvList: Inventory[] = [];

  constructor(private service: UserinvService) { }

  ngOnInit() {
    this.service.getAllUserinv().subscribe((data) => {
      console.log(data);
      this.userinvList = data;
    });
  }

  saveToDatabase() {
    // Implement logic to save changes to the database
  }

  searchMaterial(searchTerm: string) {
    this.filteredItems = this.userinvList.filter(item => item.material_name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}