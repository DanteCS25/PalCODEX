import { Component } from '@angular/core';
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

  constructor(private service: UserinvService) { }

  userinvList: Inventory[] = []

  ngOnInit() {
    this.service.getAllUserinv().subscribe((data) => {
      console.log(data);
      this.userinvList = data;
    })
  }
}
