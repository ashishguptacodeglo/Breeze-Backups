import { Component, OnDestroy, OnInit, ViewChild, Input, TemplateRef, AfterViewInit,EventEmitter,Output } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import * as moment from "moment";


@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  
  @ViewChild(DataTableDirective) dtElement: DataTableDirective | any;
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  ticketlist: any = [];
  fetched: boolean = false;
 
  selected: any;
 
  constructor(private http: HttpClient) {
  }
 getRandomStatus() {
     const months = ["open", "closed", "removed"];
    const random = Math.floor(Math.random() * months.length);
    return months[random];
  }
  

  ngOnInit(): void {
     this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(posts => {
      this.ticketlist = posts;
       this.ticketlist = this.ticketlist.map((ticket,index)=>{
          ticket.status = this.getRandomStatus();
          return ticket;
        })

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

   statusFilters = [
    { value: "open", name: "Open" },
    { value: "closed", name: "Closed" },
    { value: "removed", name: "Removed" },
   ];

     statusChangeNgSelect(event: any,i:any) {
    this.ticketlist[i].status = event.value;
  }

  @Output() BackEvent = new EventEmitter<string>();
  ShowDetailsPage(){
    this.BackEvent.emit("details");
  }


}
