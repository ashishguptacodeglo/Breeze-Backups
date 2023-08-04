import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholePricingsComponent } from './whole-pricings.component';

describe('WholePricingsComponent', () => {
  let component: WholePricingsComponent;
  let fixture: ComponentFixture<WholePricingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WholePricingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WholePricingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
