import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-app-management',
  templateUrl: './mobile-app-management.component.html',
  styleUrls: ['./mobile-app-management.component.scss']
})
export class MobileAppManagementComponent implements OnInit {

  page = 'overview'
  breadCrumb: any  = { 
  level: 2,
  page: 'Mobile app users'
  }
  constructor() { }

  ngOnInit(): void {
  }
 
tabChange(page:any) {
    this.page = page;
 }

}
