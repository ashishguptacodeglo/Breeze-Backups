import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstPhotosComponent } from './est-photos.component';

describe('EstPhotosComponent', () => {
  let component: EstPhotosComponent;
  let fixture: ComponentFixture<EstPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstPhotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
