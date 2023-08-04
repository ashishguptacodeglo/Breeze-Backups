import { Component, OnDestroy, OnInit, ViewChild, Input, TemplateRef, AfterViewInit } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

 page = 'list';
 @ViewChild(DataTableDirective) dtElement: DataTableDirective | any;
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  ticketlist: any = [];
  fetched: boolean = false;
  timeArray : any = [];

  constructor(private http: HttpClient) {
  }
  getRandomStatus() {
    const months = ["open", "closed", "pending","declined"];
    const random = Math.floor(Math.random() * months.length);
    return months[random];
  }
  ShowDetails(){
    this.page = 'details';
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
  


  ngAfterViewInit(): void {
    this.dtTrigger.next(true);
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  

 
 statusFilters = [
    { value: "open", name: "Open" },
    { value: "closed", name: "Closed" },
    { value: "pending", name: "Pending" },
    { value: "declined", name: "Declined" },
   ];
  

   statusChangeNgSelect(event: any,i:any) {
    this.ticketlist[i].status = event.value;
    // this.ApprovalActivityHistory[i].activites[j].ismodalopen = event.value == 'rejected';  
  }


}
