import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerMessagesComponent } from './influencer-messages.component';

describe('InfluencerMessagesComponent', () => {
  let component: InfluencerMessagesComponent;
  let fixture: ComponentFixture<InfluencerMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfluencerMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfluencerMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
