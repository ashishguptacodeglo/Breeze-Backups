import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyHouseRuleComponent } from './property-house-rule.component';

describe('PropertyHouseRuleComponent', () => {
  let component: PropertyHouseRuleComponent;
  let fixture: ComponentFixture<PropertyHouseRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyHouseRuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyHouseRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
