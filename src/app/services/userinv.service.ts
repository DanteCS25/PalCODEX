import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from '../models/userinv.model';

@Injectable({
  providedIn: 'root'
})
export class UserinvService {

  constructor(private http:HttpClient) { }

  private baseURL = "http://localhost:3000/inventory";

  //Get all inventory items by status
  getAllUserinvByStatus(status: string): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(`${this.baseURL}/user/${status}`);
  }

  updateUserinv(item: Inventory): Observable<Inventory> {
    return this.http.put<Inventory>(`${this.baseURL}/${item.id}`, item);
  }
}
