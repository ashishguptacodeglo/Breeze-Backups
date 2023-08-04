import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostRestaurantComponent } from './host-restaurant.component';

describe('HostRestaurantComponent', () => {
  let component: HostRestaurantComponent;
  let fixture: ComponentFixture<HostRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
