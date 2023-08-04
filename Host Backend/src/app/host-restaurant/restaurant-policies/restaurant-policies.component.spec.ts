import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantPoliciesComponent } from './restaurant-policies.component';

describe('RestaurantPoliciesComponent', () => {
  let component: RestaurantPoliciesComponent;
  let fixture: ComponentFixture<RestaurantPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantPoliciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
