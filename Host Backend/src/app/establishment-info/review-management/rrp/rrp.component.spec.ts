import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrpComponent } from './rrp.component';

describe('RrpComponent', () => {
  let component: RrpComponent;
  let fixture: ComponentFixture<RrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RrpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
