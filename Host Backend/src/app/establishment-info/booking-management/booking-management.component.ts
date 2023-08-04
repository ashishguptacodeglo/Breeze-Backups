import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-management',
  templateUrl: './booking-management.component.html',
  styleUrls: ['./booking-management.component.scss']
})
export class BookingManagementComponent implements OnInit {
  page:any = "requests";
  breadCrumb: any  = { 
  level: 2,
  page: 'Booking Management',
  parents: [
    { name: 'Establishment Management ', link: '/establishment-info/establishment-management' }
    ],
  }
  constructor() { }

  ngOnInit(): void {
  }
  
  tabChange(page:any) {
    this.page = page;
 }
}
