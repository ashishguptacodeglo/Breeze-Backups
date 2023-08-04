import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledNotificationsComponent } from './scheduled-notifications.component';

describe('ScheduledNotificationsComponent', () => {
  let component: ScheduledNotificationsComponent;
  let fixture: ComponentFixture<ScheduledNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduledNotificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduledNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
