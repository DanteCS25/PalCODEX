import { Component, Input } from '@angular/core';
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
  
  constructor(private service: UserinvService) { }

  //add all behaviour and variables
  @Input() item: Inventory = {
    id: 0,
    profile_id: 2,
    material_icon: "assets/materials/Coal.png",
    material_name: "Coal",
    material_amount: 0
  }
}
