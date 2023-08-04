import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  page = 'scheduled'
  breadCrumb: any  = { 
  level: 2,
  page: 'Notification'
  }
  constructor() { }

  ngOnInit(): void {
  }
 
tabChange(page:any) {
    this.page = page;
 }

}
