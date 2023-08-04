import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreatorsComponent } from './post-creators.component';

describe('PostCreatorsComponent', () => {
  let component: PostCreatorsComponent;
  let fixture: ComponentFixture<PostCreatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCreatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
