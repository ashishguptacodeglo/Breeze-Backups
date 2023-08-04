import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalDocumentsComponent } from './approval-documents.component';

describe('ApprovalDocumentsComponent', () => {
  let component: ApprovalDocumentsComponent;
  let fixture: ComponentFixture<ApprovalDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
