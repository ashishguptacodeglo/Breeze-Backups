import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRequestsComponent } from './post-requests.component';

describe('PostRequestsComponent', () => {
  let component: PostRequestsComponent;
  let fixture: ComponentFixture<PostRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
