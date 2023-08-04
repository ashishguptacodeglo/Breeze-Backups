import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPhotosComponent } from './menu-photos.component';

describe('MenuPhotosComponent', () => {
  let component: MenuPhotosComponent;
  let fixture: ComponentFixture<MenuPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPhotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
