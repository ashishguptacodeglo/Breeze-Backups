import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyRoomTypeComponent } from './property-room-type.component';

describe('PropertyRoomTypeComponent', () => {
  let component: PropertyRoomTypeComponent;
  let fixture: ComponentFixture<PropertyRoomTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyRoomTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyRoomTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
