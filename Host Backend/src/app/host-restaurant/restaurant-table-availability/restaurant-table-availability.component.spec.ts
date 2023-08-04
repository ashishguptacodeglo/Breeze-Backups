import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantTableAvailabilityComponent } from './restaurant-table-availability.component';

describe('RestaurantTableAvailabilityComponent', () => {
  let component: RestaurantTableAvailabilityComponent;
  let fixture: ComponentFixture<RestaurantTableAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantTableAvailabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantTableAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
