import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomSafetyHygieneComponent } from './room-safety-hygiene.component';

describe('RoomSafetyHygieneComponent', () => {
  let component: RoomSafetyHygieneComponent;
  let fixture: ComponentFixture<RoomSafetyHygieneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomSafetyHygieneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomSafetyHygieneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
