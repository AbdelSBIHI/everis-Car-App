import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Car } from '../models/car.model';
import { CarService } from '../services/car.service';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  
  displayedColumns: string[] = ["id", "brand", "registration", "country"];
  columnsToDisplay: string[] = [...this.displayedColumns, 'actions'];
  dataSource: MatTableDataSource<Car>;
  cars: Car[];
  page: number = 0;
  pageSize: number;
  length: number;
  orderBy: string;
  filter: string;
  sort: string;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) matSort: MatSort;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.pageSize = this.paginator.pageSize || 3;
    this.getCars();
  }

  getCars(): void {
    this.page = this.paginator.pageIndex + 1;
    this.carService.getCars(this.page, this.pageSize).subscribe((res) => {
      this.cars = res.data;
      this.length = res.totalElmenets;
      this.dataSource = new MatTableDataSource(this.cars);
    });
  }

  applyBackendFilter(event: Event) {
    this.page = 0;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.carService
      .getCars(this.page, this.pageSize, this.filter)
      .subscribe((res) => {
        this.cars = res.data;
        this.length = res.totalElmenets;
        this.dataSource.data = this.cars;
      });
  }

  setOffset(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.page = event.pageSize * event.pageIndex;
    this.getCars();
  }

  sortChange(event){
    let field = event.active;
    this.sort = event.direction;
    this.orderBy = field;

    this.carService.getCars(this.page, this.pageSize, this.filter, this.orderBy,this.sort).subscribe((res) => {
      this.cars = res.data;
      this.length = res.totalElmenets;
      this.dataSource.data = this.cars;
    });
  }

  deleteCar(id:string){
    this.carService.deleteCar(id);
  
  }

  

}
