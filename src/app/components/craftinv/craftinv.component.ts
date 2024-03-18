import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CraftinvItemComponent } from '../cards/craftinv-item/craftinv-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CraftinvService } from '../../services/craftinv.service';
import { Craftinv } from '../../models/craftinv.model';

@Component({
  selector: 'app-craftinv',
  standalone: true,
  imports: [CommonModule, CraftinvItemComponent, ReactiveFormsModule],
  templateUrl: './craftinv.component.html',
  styleUrl: './craftinv.component.css'
})
export class CraftinvComponent {

  constructor(private service: CraftinvService) { }

  craftinvList: Craftinv[] = []

  ngOnInit() {
    this.service.getAllCraftinv().subscribe((data) => {
      console.log(data);
      this.craftinvList = data;
    })
  }
}
