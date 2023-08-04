import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteInfluencerComponent } from './invite-influencer.component';

describe('InviteInfluencerComponent', () => {
  let component: InviteInfluencerComponent;
  let fixture: ComponentFixture<InviteInfluencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteInfluencerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InviteInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
