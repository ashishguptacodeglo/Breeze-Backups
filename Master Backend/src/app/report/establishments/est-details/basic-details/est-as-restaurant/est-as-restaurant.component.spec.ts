import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstAsRestaurantComponent } from './est-as-restaurant.component';

describe('EstAsRestaurantComponent', () => {
  let component: EstAsRestaurantComponent;
  let fixture: ComponentFixture<EstAsRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstAsRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstAsRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
