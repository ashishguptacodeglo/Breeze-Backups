import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstCatgoryImagesComponent } from './est-catgory-images.component';

describe('EstCatgoryImagesComponent', () => {
  let component: EstCatgoryImagesComponent;
  let fixture: ComponentFixture<EstCatgoryImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstCatgoryImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstCatgoryImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
