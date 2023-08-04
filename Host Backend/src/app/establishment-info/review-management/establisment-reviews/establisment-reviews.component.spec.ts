import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablismentReviewsComponent } from './establisment-reviews.component';

describe('EstablismentReviewsComponent', () => {
  let component: EstablismentReviewsComponent;
  let fixture: ComponentFixture<EstablismentReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablismentReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstablismentReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
