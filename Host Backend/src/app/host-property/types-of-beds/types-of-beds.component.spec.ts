import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesOfBedsComponent } from './types-of-beds.component';

describe('TypesOfBedsComponent', () => {
  let component: TypesOfBedsComponent;
  let fixture: ComponentFixture<TypesOfBedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesOfBedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesOfBedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
