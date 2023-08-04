import { Component, OnDestroy, OnInit, ViewChild, Input, TemplateRef, AfterViewInit } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import * as moment from "moment";


@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  page:any = "tasks";
  breadCrumb: any  = { 
  level: 2,
  page: 'Support'
  }
 @ViewChild(DataTableDirective) dtElement: DataTableDirective | any;
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  ticketlist: any = [];
  fetched: boolean = false;
  timeArray : any = [];

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
    const months = ["open", "closed", "pending","declined"];
    const random = Math.floor(Math.random() * months.length);
    return months[random];
  }
  ngOnInit(): void {
     var d = new Date(),
      h = 8.00,
      m = 0,
      meridiem = ['AM', 'PM'];
    for (var i = h; i < 24; ++i) {
      for (var j = i == h ? Math.ceil(m / 15) : 0; j < 4; ++j) {
        var time = i % 12 + ':' + (j * 15 || '00') + ' ' + meridiem[i / 12 | 0];
        this.timeArray.push({ value: time, name: time });
      }
    }

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
   SelectedDepartments = [
    { value: "1", name: "Dep1" },
    { value: "2", name: "Dep2" },
    { value: "3", name: "Dep3" },
    { value: "3", name: "Dep4" },
    { value: "4", name: "Dep5" },
  ];

  
   taskList=[
    { value: "option 1 ", name: "option 1 " },
    { value: "option 2 ", name: "option 2 " },
    { value: "option 3 ", name: "option 3 " },
    { value: "option 4 ", name: "option 4 " },
  ]


  ngAfterViewInit(): void {
    this.dtTrigger.next(true);
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  submitTheForm(){
    console.log("Submit The Form")
  }

  estfilters = [
    { value: 'all', name: "All" },
    { value: 'option-1', name: "Option 1" },
    { value: 'option-2', name: "Option 2" },
    { value: 'option-3', name: "Option 3" },
  ];
 statusFilters = [
    { value: "open", name: "Open" },
    { value: "closed", name: "Closed" },
    { value: "pending", name: "Pending" },
    { value: "declined", name: "Declined" },
   ];
  choosedDate(data: any) {

    if (data.startDate == null || data.endDate == null) { return; } {
      var startDate = moment(data.startDate.$d).format("YYYY-MM-DD");
      var endDate = moment(data.endDate.$d).format("YYYY-MM-DD");
      console.log(startDate, endDate);
    }
  }

   statusChangeNgSelect(event: any,i:any) {
    this.ticketlist[i].status = event.value;
    // this.ApprovalActivityHistory[i].activites[j].ismodalopen = event.value == 'rejected';  
  }

}
