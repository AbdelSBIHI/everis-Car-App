import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Car } from '../models/car.model';
import { CarService } from '../services/car.service';
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  
  displayedColumns: string[] = ["id", "brand", "registration", "country","x"];
  dataSource: MatTableDataSource<Car>;
  cars: Car[];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars().subscribe((res) => {
      this.cars = res.data;
      this.dataSource = new MatTableDataSource(this.cars);
    });
  
  }

  deleteCar(id:string){
    this.carService.deleteCar(id);
  
  }

  

}
