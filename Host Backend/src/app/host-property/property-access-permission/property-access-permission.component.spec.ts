import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyAccessPermissionComponent } from './property-access-permission.component';

describe('PropertyAccessPermissionComponent', () => {
  let component: PropertyAccessPermissionComponent;
  let fixture: ComponentFixture<PropertyAccessPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyAccessPermissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyAccessPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
