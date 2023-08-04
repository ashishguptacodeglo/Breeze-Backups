import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approval-history',
  templateUrl: './approval-history.component.html',
  styleUrls: ['./approval-history.component.scss']
})
export class ApprovalHistoryComponent implements OnInit {

  page = 'history';
  constructor() { }

  ngOnInit(): void {
  }

  ShowDocument(event:any){
    this.page = event
  }

}
