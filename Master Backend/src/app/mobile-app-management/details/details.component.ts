import { Component, OnDestroy, OnInit, ViewChild, Input, TemplateRef, AfterViewInit } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
   @ViewChild(DataTableDirective) dtElement: DataTableDirective | any;
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  usersList: any = [];
  fetched: boolean = false;
 
    constructor(private http: HttpClient) { }
    getRandomDevice() {
    const months = ["android", "ios"];
    const random = Math.floor(Math.random() * months.length);
    return months[random];
    }
 ngOnInit(): void {
     this.http.get('https://dummyjson.com/users?limit=100').subscribe((users:any) => {
      this.usersList = users.users.map((user,index)=>{
          user.device = this.getRandomDevice();
          return user;
        });
      console.log(this.usersList[0])
       this.fetched = true;
      this.dtOptions = {
        pagingType: "simple_numbers",
        language: { emptyTable: "No data Available" },
        pageLength: 10,
        processing: true,
        ordering: false,
      };
      console.log( this.dtOptions)
    }, error => console.error(error));
  }

    estfilters = [
    { value: "declined", name: "Declined" },
    { value: "approved", name: "Approved" },
    { value: "inprogress", name: "In progress" },
  ];
}
