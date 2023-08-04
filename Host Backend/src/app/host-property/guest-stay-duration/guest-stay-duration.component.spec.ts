import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestStayDurationComponent } from './guest-stay-duration.component';

describe('GuestStayDurationComponent', () => {
  let component: GuestStayDurationComponent;
  let fixture: ComponentFixture<GuestStayDurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestStayDurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestStayDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
