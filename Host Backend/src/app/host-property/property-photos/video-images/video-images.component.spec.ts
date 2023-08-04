import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoImagesComponent } from './video-images.component';

describe('VideoImagesComponent', () => {
  let component: VideoImagesComponent;
  let fixture: ComponentFixture<VideoImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
