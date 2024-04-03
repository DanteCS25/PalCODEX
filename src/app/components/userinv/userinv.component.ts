import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Inventory } from '../../models/userinv.model';
import { UserinvService } from '../../services/userinv.service';
import { UserinvItemComponent } from '../cards/userinv-item/userinv-item.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userinv',
  standalone: true,
  imports: [CommonModule, UserinvItemComponent, ReactiveFormsModule, FormsModule],
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
    this.filteredItems = this.userinvList.filter(item => item.material_name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  onItemViewDetails(item: Inventory): void {
    this.selectedItem = item;
    // Populate edit section (assuming you have a method or direct binding)
  }
}