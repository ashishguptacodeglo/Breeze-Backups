import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishPhotosComponent } from './dish-photos.component';

describe('DishPhotosComponent', () => {
  let component: DishPhotosComponent;
  let fixture: ComponentFixture<DishPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishPhotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
