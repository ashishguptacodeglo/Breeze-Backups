import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentInfoComponent } from './establishment-info.component';

describe('EstablishmentInfoComponent', () => {
  let component: EstablishmentInfoComponent;
  let fixture: ComponentFixture<EstablishmentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstablishmentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
