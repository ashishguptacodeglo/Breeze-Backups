import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-est-details',
  templateUrl: './est-details.component.html',
  styleUrls: ['./est-details.component.scss']
})
export class EstDetailsComponent implements OnInit {

  page = 'basic-details'
  breadCrumb: any  = { 
  level: 3,
  page: 'Details',
  parents: [
    { name: 'Establishment Update', link: '/establishment-update' }
    ],
  }
  constructor() { }

  ngOnInit(): void {
  }

  tabChange(page:any) {
    this.page = page;
 }

 
}
