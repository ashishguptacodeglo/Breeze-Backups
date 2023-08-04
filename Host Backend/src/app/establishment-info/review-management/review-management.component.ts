import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-review-management',
  templateUrl: './review-management.component.html',
  styleUrls: ['./review-management.component.scss'],
   encapsulation: ViewEncapsulation.None,
})
export class ReviewManagementComponent implements OnInit {
   breadCrumb: any  = { 
  level: 2,
  page: 'Review Management',
  parents: [
    { name: 'Establishment Management ', link: '/establishment-info/review-management' }
    ],
  }
  page:any = "establishment";
  tabChange(page:any) {
    this.page = page;
 }
  constructor() { }

  ngOnInit(): void {
  }
  
}
