import { Component, OnDestroy, OnInit, ViewChild, Input, TemplateRef, AfterViewInit } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-requests',
  templateUrl: './post-requests.component.html',
  styleUrls: ['./post-requests.component.scss']
})
export class PostRequestsComponent implements OnInit {

 @ViewChild(DataTableDirective) dtElement: DataTableDirective | any;
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  posts: any = [];
  fetched: boolean = false;


  constructor(private http: HttpClient,private router: Router) {
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
    }, error => console.error(error));

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

  redirectToMessage(id:any){
     // [routerLink]="['/establishment-info/messages']"  [queryParams]="{tab:'influencer-messages',id:i}" 
    this.router.navigate(['/establishment-info/messages'], {
      queryParams:{tab:'influencer-messages',id:id},
    });

  }

}
