import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentManagementComponent } from './establishment-management.component';

describe('EstablishmentManagementComponent', () => {
  let component: EstablishmentManagementComponent;
  let fixture: ComponentFixture<EstablishmentManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstablishmentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
