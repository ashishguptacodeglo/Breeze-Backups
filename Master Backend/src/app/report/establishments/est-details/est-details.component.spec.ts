import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstDetailsComponent } from './est-details.component';

describe('EstDetailsComponent', () => {
  let component: EstDetailsComponent;
  let fixture: ComponentFixture<EstDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
