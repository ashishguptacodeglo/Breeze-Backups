import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {

  page: any = "messages";
  breadCrumb: any = {
    level: 2,
    page: 'Messages',
    parents: [
      { name: 'Establishment Management ', link: '/establishment-info/establishment-management' }
    ],
  }
  

  constructor(private activatedRoute : ActivatedRoute) {

  }

  ngOnInit(): void {
    var tab = this.activatedRoute.snapshot.queryParamMap.get("tab");
    if(tab !== null ){
      this.page = tab;
      console.log(this.page)
    }
  }
  tabChange(page: any) {
    this.page = page;
  }

}
