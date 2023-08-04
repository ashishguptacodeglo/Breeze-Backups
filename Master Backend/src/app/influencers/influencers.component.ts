import { Component, OnDestroy, OnInit, ViewChild, Input, TemplateRef, AfterViewInit } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-influencers',
  templateUrl: './influencers.component.html',
  styleUrls: ['./influencers.component.scss']
})
export class InfluencersComponent implements OnInit {

  breadCrumb: any  = { 
    level: 2,
    page: 'Influencers'
  }
 
 @ViewChild(DataTableDirective) dtElement: DataTableDirective | any;
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  fetched: boolean = false;
   influencersList : any = [];

  constructor(private http: HttpClient) {
  }
 
 
  ngOnInit(): void {
  

    this.http.get('https://dummyjson.com/users?limit=100').subscribe((users:any) => {
      this.influencersList = users.users;
      console.log(this.influencersList[0])
      this.fetched = true;
      this.dtOptions = {
        pagingType: "simple_numbers",
        language: { emptyTable: "No data Available" },
        pageLength: 10,
        processing: true,
        ordering: false,

      };
    }, error => console.error(error));



  }
  


  ngAfterViewInit(): void {
    this.dtTrigger.next(true);
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  

 
 
}
