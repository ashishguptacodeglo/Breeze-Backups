import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserSupportComponent } from './app-user-support.component';

describe('AppUserSupportComponent', () => {
  let component: AppUserSupportComponent;
  let fixture: ComponentFixture<AppUserSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUserSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUserSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
