import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.component.html',
  styleUrls: ['./influencer.component.scss']
})
export class InfluencerComponent implements OnInit {

  page:any = "posts";
  breadCrumb: any  = { 
  level: 2,
  page: 'Task',
  parents: [
    { name: 'Establishment Management ', link: '/establishment-info/establishment-management' }
    ],
  }
    constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    var tab = this.activatedRoute.snapshot.queryParamMap.get("tab");
    if(tab !== null ){
      this.page = tab;
    }
  }
 
 tabChange(page:any) {
    this.page = page;
 }

 

}
