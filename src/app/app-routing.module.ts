import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { CarsComponent } from './cars/cars.component';
import { CreateUpdateCarComponent } from './create-update-car/create-update-car.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: "", component: CarsComponent ,pathMatch: 'full', canActivate: [AuthGuard]},
  { path: "create", component: CreateUpdateCarComponent , canActivate: [AuthGuard] },
  { path: "callback", component: CallbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
