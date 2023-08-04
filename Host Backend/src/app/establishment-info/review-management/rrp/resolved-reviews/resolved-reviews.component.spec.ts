import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolvedReviewsComponent } from './resolved-reviews.component';

describe('ResolvedReviewsComponent', () => {
  let component: ResolvedReviewsComponent;
  let fixture: ComponentFixture<ResolvedReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolvedReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolvedReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
