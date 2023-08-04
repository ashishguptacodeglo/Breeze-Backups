import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomServiceAvailabilityComponent } from './room-service-availability.component';

describe('RoomServiceAvailabilityComponent', () => {
  let component: RoomServiceAvailabilityComponent;
  let fixture: ComponentFixture<RoomServiceAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomServiceAvailabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomServiceAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
