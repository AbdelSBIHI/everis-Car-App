import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { CreateUpdateCarComponent } from './create-update-car/create-update-car.component';

const routes: Routes = [
  { path: "", component: CarsComponent ,pathMatch: 'full'},
  { path: "create", component: CreateUpdateCarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
