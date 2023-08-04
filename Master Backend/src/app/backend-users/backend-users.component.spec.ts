import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendUsersComponent } from './backend-users.component';

describe('BackendUsersComponent', () => {
  let component: BackendUsersComponent;
  let fixture: ComponentFixture<BackendUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
