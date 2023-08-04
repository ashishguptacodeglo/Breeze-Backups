import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyTimingsComponent } from './property-timings.component';

describe('PropertyTimingsComponent', () => {
  let component: PropertyTimingsComponent;
  let fixture: ComponentFixture<PropertyTimingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyTimingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyTimingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
