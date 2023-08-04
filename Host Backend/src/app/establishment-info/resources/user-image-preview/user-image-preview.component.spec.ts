import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserImagePreviewComponent } from './user-image-preview.component';

describe('UserImagePreviewComponent', () => {
  let component: UserImagePreviewComponent;
  let fixture: ComponentFixture<UserImagePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserImagePreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserImagePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
