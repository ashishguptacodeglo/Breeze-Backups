import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rrp',
  templateUrl: './rrp.component.html',
  styleUrls: ['./rrp.component.scss']
})
export class RrpComponent implements OnInit {
   @Input() cateIdName;
  pagereview: any = 'all-reviews';
  dashboardData = [];
  establishmentList: any;
  allReviews = [];
  leastCategory = 'Value';
  resolvedReviews = [];
  resolvedReviewsCounts = 0;
  revokedReviewsCounts = 0;
  totalReviews : any =  0;
  selectedRestaurant: any;
  dealList = [];
  selectedUserName: any;
  constructor() { 
    }

  ngOnInit(): void {
  }
  reviewSort = [
    {id: 1, name: 'Option1'},
    {id: 2, name: 'Option2'},
    {id: 4, name: 'Option3'},
];

  tabreviewChange(tab:any){
    this.pagereview = tab;
    console.log(this.pagereview)
  }
}
