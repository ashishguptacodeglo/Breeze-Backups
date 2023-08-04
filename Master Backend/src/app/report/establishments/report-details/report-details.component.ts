import { Component, OnDestroy, OnInit, ViewChild, Input, TemplateRef, AfterViewInit,EventEmitter,Output } from "@angular/core";

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent implements OnInit {

   status = 'open';
  statusList = [
    { value: 'open', name: 'open' },
    { value: 'closed', name: 'closed' },
    { value: 'pending', name: 'pending' },
  ];

  assignedList : any = [];
  attachments = [
    { name: "Issue summary", type: "doc" },
    { name: "Payment_slip", type: "pdf" }
  ];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('https://dummyjson.com/users').subscribe((users:any) => {
        this.assignedList = users.users.map((user,index)=>{
          return { value: user.id, name: user.firstName + ' '+user.lastName}
        })
     })
  }
  onChange(event: any) {
    this.status = event.value;
  }

 
  @Output() BackEvent = new EventEmitter<string>();
  ShowUserProfile(page:any){
    this.BackEvent.emit(page);
  }

}
