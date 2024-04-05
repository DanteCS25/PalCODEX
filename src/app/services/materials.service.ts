import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materials } from '../models/materials.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {

  constructor(private http:HttpClient) { }

  private baseURL = "http://localhost:3000/materials"

  //Get all inventory items
  getAllMaterials(): Observable<Materials[]>{
    return this.http.get<Materials[]>(this.baseURL)
  }

  updateMaterialAmount(id: number, newAmount: number): Observable<any> {
    // Assuming you have an endpoint to update the material amount
    return this.http.put(`${this.baseURL}/${id}`, { material_amount: newAmount });
  }

  sendMaterialToUserInventory(user_id:number,  item: string, material_id: number, amount: number): Observable<any> {
    // Assuming you have an endpoint to send material to user inventory
    
    console.log(material_id)
    return this.http.put(`http://localhost:3000/material/${user_id}`, { user_id , item, material_id, amount });
  }
}



