import { Component, OnDestroy, OnInit, ViewChild, Input, TemplateRef, AfterViewInit } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-invite-influencer',
  templateUrl: './invite-influencer.component.html',
  styleUrls: ['./invite-influencer.component.scss']
})
export class InviteInfluencerComponent implements OnInit {

  @ViewChild(DataTableDirective) dtElement: DataTableDirective | any;
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  inviteList: any = [];
  fetched: boolean = false;


  constructor(private http: HttpClient) {
  }
  getRandomStatus() {
    const months = ["accepted", "pending", "declined"];
    const random = Math.floor(Math.random() * months.length);
    return months[random];
  }
  ngOnInit(): void {
    this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(posts => {
      this.inviteList = posts;
      this.inviteList = this.inviteList.map((invite, index) => {
        invite.status = this.getRandomStatus();
        return invite;
      })

      this.fetched = true;
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
        processing: true,
        ordering: false
      };
      console.log(this.inviteList)
    }, error => console.error(error));

  }


}
