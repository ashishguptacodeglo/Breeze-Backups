import { Component, OnDestroy, OnInit, ViewChild, Input, TemplateRef, AfterViewInit,EventEmitter,Output } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  posts:any = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('https://dummyjson.com/users').subscribe((users:any) => {
        this.posts = users.users;
     })
  }
 @Output() BackEvent = new EventEmitter<string>();
  ShowUserProfile(page:any){
    this.BackEvent.emit(page);
  }
}
