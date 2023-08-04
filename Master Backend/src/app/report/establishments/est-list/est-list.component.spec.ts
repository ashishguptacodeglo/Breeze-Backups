import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstListComponent } from './est-list.component';

describe('EstListComponent', () => {
  let component: EstListComponent;
  let fixture: ComponentFixture<EstListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
