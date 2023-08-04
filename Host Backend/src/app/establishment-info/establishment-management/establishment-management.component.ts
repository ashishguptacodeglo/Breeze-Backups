import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-establishment-management',
  templateUrl: './establishment-management.component.html',
  styleUrls: ['./establishment-management.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EstablishmentManagementComponent implements OnInit {
  establismentType: string = 'restaurant'; // Add 'property' or 'restaurant' to see the diffrent category page
  breadCrumb: any  = { 
  level: 3,
  page: 'Details',
  parents: [
    { name: 'Establishment Management ', link: '/establishment-info/establishment-management' }
    ],
  }

  constructor() { }

  ngOnInit(): void {
    // console.log(this.breadCrumb,"Hi I am passing")

  }

}
