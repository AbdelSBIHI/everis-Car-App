import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateCarComponent } from './create-update-car.component';

describe('CreateUpdateCarComponent', () => {
  let component: CreateUpdateCarComponent;
  let fixture: ComponentFixture<CreateUpdateCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
