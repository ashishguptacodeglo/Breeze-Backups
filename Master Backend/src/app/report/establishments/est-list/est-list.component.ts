import { Component, OnDestroy, OnInit, ViewChild, Input, TemplateRef, AfterViewInit,EventEmitter,Output } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import * as moment from "moment";

@Component({
  selector: 'app-est-list',
  templateUrl: './est-list.component.html',
  styleUrls: ['./est-list.component.scss']
})
export class EstListComponent implements OnInit {

  
  @ViewChild(DataTableDirective) dtElement: DataTableDirective | any;
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  posts: any = [];
  fetched: boolean = false;
 
  selected: any;
  alwaysShowCalendars: boolean;
  ranges: any = {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'This Week': [moment().subtract(6, 'days'), moment().subtract(1, 'days')],
    'Last Week': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Past Two Week': [moment().subtract(13, 'days'), moment().subtract(1, 'days')],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
    'This Year': [moment().startOf('year'), moment().endOf('year')],
    'Last Year': [moment().subtract(1, 'year').startOf('year'), moment().subtract(1, 'year').endOf('year')]
  }

  invalidDates: moment.Moment[] = [moment().add(2, 'days'), moment().add(3, 'days'), moment().add(5, 'days')];

  isInvalidDate = (m: moment.Moment) => {
    return this.invalidDates.some(d => d.isSame(m, 'day'))
  }


  constructor(private http: HttpClient) {
    this.alwaysShowCalendars = true;
  }
 getRandomStatus() {
     const months = ["open", "closed", "removed"];
    const random = Math.floor(Math.random() * months.length);
    return months[random];
  }
  
  ngOnInit(): void {
    this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(posts => {
      this.posts = posts;
      this.posts = this.posts.map((est,index)=>{
          est.status = this.getRandomStatus();
          return est;
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
 choosedDate(data: any) {

    if (data.startDate == null || data.endDate == null) { return; } {
      var startDate = moment(data.startDate.$d).format("YYYY-MM-DD");
      var endDate = moment(data.endDate.$d).format("YYYY-MM-DD");
      console.log(startDate, endDate);
    }
  }
   estfilters = [
    { value: "declined", name: "Declined" },
    { value: "approved", name: "Approved" },
    { value: "inprogress", name: "In progress" },
  ];
   statusFilters = [
    { value: "open", name: "Open" },
    { value: "closed", name: "Closed" },
    { value: "removed", name: "Removed" },
   ];
  statusChangeNgSelect(event: any,i:any) {
    this.posts[i].status = event.value;
  }

   @Output() BackEvent = new EventEmitter<string>();
  ShowDetailsPage(){
    this.BackEvent.emit("details");
  }

}
