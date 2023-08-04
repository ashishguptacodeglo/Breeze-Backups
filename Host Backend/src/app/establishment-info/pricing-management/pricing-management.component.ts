import {Component,OnDestroy,OnInit,ViewChild,Input,TemplateRef,AfterViewInit,ElementRef } from "@angular/core";

@Component({
  selector: "app-pricing-management",
  templateUrl: "./pricing-management.component.html",
  styleUrls: ["./pricing-management.component.scss"],
})
export class PricingManagementComponent implements OnInit {
  breadCrumb: any = {
    level: 2,
    page: "Pricing Management",
    parents: [
      {
        name: "Establishment Management ",
        link: "/establishment-info/establishment-management",
      },
    ],
  };
  estRentalType : string = 'full';

  constructor() {}
  ngOnInit(): void {
   
  }

}
