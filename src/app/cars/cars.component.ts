import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Car } from '../models/car.model';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars :Car[];
  private refreshSource = new BehaviorSubject<boolean>(false);
  refresh = this.refreshSource.asObservable();

  constructor(private carService :CarService ) { }

  ngOnInit(): void {
    this.getCars();
  }

  public setRefresh(refresh: boolean): void {
    this.refreshSource.next(refresh)
  }

  getCars(): void {
    this.carService.getCars().subscribe(c => (this.cars = c.data));
  }

  deleteCar(id:string){
    this.carService.deleteCar(id).subscribe(()=> this.setRefresh(true));
  
  }
  

}
