import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() breadCrumb: any;
 
  constructor() { }

  ngOnInit(): void {
    // console.log(this.breadCrumb,"Inside Breadcrumb Comonent")
  }

}
