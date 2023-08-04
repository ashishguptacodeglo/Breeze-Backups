import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAmenitiesComponent } from './restaurant-amenities.component';

describe('RestaurantAmenitiesComponent', () => {
  let component: RestaurantAmenitiesComponent;
  let fixture: ComponentFixture<RestaurantAmenitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantAmenitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
