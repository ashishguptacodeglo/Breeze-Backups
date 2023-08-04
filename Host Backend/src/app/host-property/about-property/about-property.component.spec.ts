import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPropertyComponent } from './about-property.component';

describe('AboutPropertyComponent', () => {
  let component: AboutPropertyComponent;
  let fixture: ComponentFixture<AboutPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
