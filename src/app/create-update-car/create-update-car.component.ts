import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../models/car.model';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-create-update-car',
  templateUrl: './create-update-car.component.html',
  styleUrls: ['./create-update-car.component.css']
})
export class CreateUpdateCarComponent implements OnInit {

  title: string;
  form: FormGroup;
  id: string;

  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) 
  {
    this.id = this.route.snapshot.params.id;
    this.initForm();
  }

  ngOnInit() {}

  initForm(): void {
    this.form = this.fb.group({
      brand: ["", Validators.required],
      registration: ["", Validators.required],
      country: ["", Validators.required],
    });

    if (this.id != undefined) {
      this.title = `Editing: ${this.id.substring(0, 6)}`;
      let car = this.carService.getCar(this.id).subscribe((val) => {
        this.form.controls.brand.setValue(val.brand);
        this.form.controls.registration.setValue(val.registration);
        this.form.controls.country.setValue(val.country);
      });
    } else {
      this.title = `Creating a car`;
    }
  }

  async saveCar() {
    if (this.form.valid) {
      let date = new Date(this.form.controls.registration.value);

      let car = new Car(
        this.form.controls.brand.value,
        date,
        this.form.controls.country.value
      );

      if (this.id == undefined) {
        await this.carService
          .createCar(car)
          .subscribe(() => this.router.navigate([""]));
      } else {
        await this.carService
          .updateCar(this.id, car)
          .subscribe(() => this.router.navigate([""]));
      }
    }
  }

}
