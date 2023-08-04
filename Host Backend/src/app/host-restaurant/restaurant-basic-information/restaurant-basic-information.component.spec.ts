import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantBasicInformationComponent } from './restaurant-basic-information.component';

describe('RestaurantBasicInformationComponent', () => {
  let component: RestaurantBasicInformationComponent;
  let fixture: ComponentFixture<RestaurantBasicInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantBasicInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantBasicInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
