import { Component, OnDestroy, OnInit, ViewChild, Input, TemplateRef, AfterViewInit } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import * as moment from "moment";


@Component({
  selector: 'app-live-notifications',
  templateUrl: './live-notifications.component.html',
  styleUrls: ['./live-notifications.component.scss']
})
export class LiveNotificationsComponent implements OnInit {

  page = 'all'
  breadCrumb: any  = { 
    level: 2,
    page: 'Establishment Updatess',
  }
  @ViewChild(DataTableDirective) dtElement: DataTableDirective | any;
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  posts: any = [];
  fetched: boolean = false;
 
  selected: any;
 
timeArray : any = [];
  constructor(private http: HttpClient) {
    this.alwaysShowCalendars = true;
  }
 getRandomStatus() {
     const months = ["declined", "approved", "inprogress"];
    const random = Math.floor(Math.random() * months.length);
    return months[random];
  }
  
  AudienceList : any = [];

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

     this.http.get('https://dummyjson.com/users').subscribe((users:any) => {
        this.AudienceList = users.users.map((user,index)=>{
          return { value: user.id, name: user.firstName}
        })
         console.log(this.AudienceList)

        // this.AudienceList.push({
        //    { value: 'all', name: "All" },
        // })
     })
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
   showDateTime = false;
  onItemChange(e: any) {
    this.showDateTime = e.target.value == 'schedule'
  }

   alwaysShowCalendars: boolean;

    filter = [
      { value: 'all', name: "All" },
      { value: 'option-1', name: "Option 1" },
      { value: 'option-2', name: "Option 2" },
      { value: 'option-3', name: "Option 3" },
    ];

}
