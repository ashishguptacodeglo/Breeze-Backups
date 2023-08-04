import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-establishment-info',
  templateUrl: './establishment-info.component.html',
  styleUrls: ['./establishment-info.component.scss']
})
export class EstablishmentInfoComponent implements OnInit {
  page:any = "establishment";
  constructor() { }
  
  ngOnInit(): void {
  }
  tabChange(page:any) {
    this.page = page;
 }
}
