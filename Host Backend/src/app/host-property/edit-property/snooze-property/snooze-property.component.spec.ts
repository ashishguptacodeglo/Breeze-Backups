import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnoozePropertyComponent } from './snooze-property.component';

describe('SnoozePropertyComponent', () => {
  let component: SnoozePropertyComponent;
  let fixture: ComponentFixture<SnoozePropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnoozePropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnoozePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
