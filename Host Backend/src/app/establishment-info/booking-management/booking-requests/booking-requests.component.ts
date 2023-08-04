import { Component, OnDestroy, OnInit, ViewChild, Input, TemplateRef, AfterViewInit } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';


@Component({
  selector: 'app-booking-requests',
  templateUrl: './booking-requests.component.html',
  styleUrls: ['./booking-requests.component.scss']
})
export class BookingRequestsComponent implements AfterViewInit, OnDestroy, OnInit {

  @ViewChild(DataTableDirective) dtElement: DataTableDirective | any;
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  posts: any = [];
  fetched: boolean = false;


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(posts => {
      this.posts = posts;
      this.fetched = true;
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true
      };
      console.log(this.dtOptions)
    }, error => console.error(error));


  }

  isToday(someDate: any) {
    const today = new Date();
    return (
      someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
    );
  }

  isYesterday(someDate: any) {
    const today = new Date();
    let yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    return (someDate.getDate() == yesterday.getDate() &&
      someDate.getMonth() == yesterday.getMonth() &&
      someDate.getFullYear() == yesterday.getFullYear()
    );
  }

  ChangeStatus(status: any, ticket: any) {
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next(true);
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

 



}
