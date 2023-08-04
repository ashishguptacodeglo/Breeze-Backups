import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-user-support',
  templateUrl: './app-user-support.component.html',
  styleUrls: ['./app-user-support.component.scss']
})
export class AppUserSupportComponent implements OnInit {

 page = 'dashboard'
  breadCrumb: any  = { 
  level: 2,
  page: 'App User Support'
  }
  constructor() { }

  ngOnInit(): void {
  }
 
tabChange(page:any) {
    this.page = page;
 }

}
