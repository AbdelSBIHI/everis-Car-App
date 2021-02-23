import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Car } from '../models/car.model';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
   API_URL = environment.baseUrl;
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    
  constructor(private httpClient: HttpClient) {}

  getCars(page: number, size: number,sort?:string, orderBy?: string ,filterBy?: string) {
    let query = `${this.API_URL}?page=${page}&size=${size}`;

    if (sort != null && sort != "") {
      query += `&sort=${sort}`;
    }
    
    if (filterBy != null && filterBy != "") {
      query += `&filterBy=${filterBy}`;
    }
    if (orderBy != null && orderBy != "") {
      query += `&orderBy=${orderBy}`;
    }
    return this.httpClient.get<any>(query);
  }

  getCar(id: string) {
    return this.httpClient.get<Car>(`${this.API_URL}/${id}`);
  }

  createCar(car:Car){
    return this.httpClient.post<Car>(this.API_URL,car,this.httpOptions);
  }

  deleteCar(id: string) {
    return this.httpClient.delete<Car>(`${this.API_URL}/${id}`,this.httpOptions);
  }

  updateCar(id: string, car: Car) {
    return this.httpClient
      .put<Car>(`${this.API_URL}/${id}`, car, this.httpOptions);
  }
}
