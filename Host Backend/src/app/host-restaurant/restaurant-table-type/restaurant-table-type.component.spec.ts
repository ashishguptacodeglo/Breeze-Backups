import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantTableTypeComponent } from './restaurant-table-type.component';

describe('RestaurantTableTypeComponent', () => {
  let component: RestaurantTableTypeComponent;
  let fixture: ComponentFixture<RestaurantTableTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantTableTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantTableTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
