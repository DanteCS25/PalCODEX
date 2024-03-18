import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CraftinvService } from '../../../services/craftinv.service';
import { Craftinv } from '../../../models/craftinv.model';

@Component({
  selector: 'app-craftinv-item',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './craftinv-item.component.html',
  styleUrl: './craftinv-item.component.css'
})
export class CraftinvItemComponent {

    constructor(private service: CraftinvService) { }
    
      @Input() item: Craftinv = {
        id: 0,
        profile_id: 2,
        craft_name: "",
        craft_amount: 1
      }
}
