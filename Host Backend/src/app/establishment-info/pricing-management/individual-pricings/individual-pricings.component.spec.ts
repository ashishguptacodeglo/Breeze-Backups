import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualPricingsComponent } from './individual-pricings.component';

describe('IndividualPricingsComponent', () => {
  let component: IndividualPricingsComponent;
  let fixture: ComponentFixture<IndividualPricingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualPricingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualPricingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
