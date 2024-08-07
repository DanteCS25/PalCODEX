import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UserinvService } from '../../../services/userinv.service';
import { Inventory } from '../../../models/userinv.model';

@Component({
  selector: 'app-userinv-item',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './userinv-item.component.html',
  styleUrl: './userinv-item.component.css'
})
export class UserinvItemComponent {
  
  @Output() viewDetails = new EventEmitter<Inventory>();

  constructor(private service: UserinvService) { }

  //add all behaviour and variables
  @Input() item: Inventory = {
    id: 0,
    profile_id: 2,
    material_icon: "assets/materials/Coal.png",
    material_name: "Coal",
    material_amount: 0,
    status: 'novice'
  }

  onViewDetailsClick(): void {
    this.viewDetails.emit(this.item);
  }
}
