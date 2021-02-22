import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Car } from '../models/car.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {
   API_URL = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}

  getCars(){
    return this.httpClient.get<Car[]>(this.API_URL);
  }

  getCar(id: string) {
    return this.httpClient.get<Car[]>(`${this.API_URL}/${id}`);
  }
}
