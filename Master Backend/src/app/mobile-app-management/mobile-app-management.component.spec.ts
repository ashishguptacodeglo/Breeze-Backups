import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppManagementComponent } from './mobile-app-management.component';

describe('MobileAppManagementComponent', () => {
  let component: MobileAppManagementComponent;
  let fixture: ComponentFixture<MobileAppManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAppManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileAppManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
