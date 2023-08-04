import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
 page = 'profile'
  breadCrumb: any  = { 
  level: 2,
  page: 'Report'
  };
  hideMainTabs : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
 
  tabChange(page:any) {
    
    this.page = page;
 }

 ShowTab(page:any){
  this.hideMainTabs =  page == 'est-details'
  console.log(page,this.hideMainTabs,"I Am in Main Controller")
 }

}
