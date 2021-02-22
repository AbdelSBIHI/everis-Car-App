import { Injectable } from '@angular/core';
import { API_URL } from '../config/config';
import { HttpClient } from "@angular/common/http";
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) {}

  getCars(){
    return this.httpClient.get<Car[]>(API_URL);
  }

  getCar(id: string) {
    return this.httpClient.get<Car[]>(`${API_URL}/${id}`);
  }
}
