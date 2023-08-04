import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit {

  page = 'faq'
  breadCrumb: any  = { 
    level: 2,
    page: 'Queries'
  }
  constructor() { }

  ngOnInit(): void {
  }
 
  tabChange(page:any) {
      this.page = page;
   }


}
