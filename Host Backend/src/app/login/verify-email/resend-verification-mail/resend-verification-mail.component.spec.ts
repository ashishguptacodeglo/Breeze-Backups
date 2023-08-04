import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResendVerificationMailComponent } from './resend-verification-mail.component';

describe('ResendVerificationMailComponent', () => {
  let component: ResendVerificationMailComponent;
  let fixture: ComponentFixture<ResendVerificationMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResendVerificationMailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResendVerificationMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
