import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlyHostingComponent } from './currently-hosting.component';

describe('CurrentlyHostingComponent', () => {
  let component: CurrentlyHostingComponent;
  let fixture: ComponentFixture<CurrentlyHostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentlyHostingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentlyHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
