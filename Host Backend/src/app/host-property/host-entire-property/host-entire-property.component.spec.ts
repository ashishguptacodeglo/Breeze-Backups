import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostEntirePropertyComponent } from './host-entire-property.component';

describe('HostEntirePropertyComponent', () => {
  let component: HostEntirePropertyComponent;
  let fixture: ComponentFixture<HostEntirePropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostEntirePropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostEntirePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
