import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstCatgoryListComponent } from './est-catgory-list.component';

describe('EstCatgoryListComponent', () => {
  let component: EstCatgoryListComponent;
  let fixture: ComponentFixture<EstCatgoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstCatgoryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstCatgoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
