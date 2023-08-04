import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstAsPropertyComponent } from './est-as-property.component';

describe('EstAsPropertyComponent', () => {
  let component: EstAsPropertyComponent;
  let fixture: ComponentFixture<EstAsPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstAsPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstAsPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
