import { Component, OnDestroy, OnInit, ViewChild, Input, TemplateRef, AfterViewInit } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-approved-posts',
  templateUrl: './approved-posts.component.html',
  styleUrls: ['./approved-posts.component.scss']
})
export class ApprovedPostsComponent implements OnInit {

 posts: any = [];
  fetched: boolean = false;


  constructor(private http: HttpClient) {
  }

getImage() {
    const months = [
      "assets/img/host-backend/profile.png",
      "https://user.ptetutorials.com/images/user-profile.png",
      "assets/img/dashboard/header-account.svg"
    ];
    const random = Math.floor(Math.random() * months.length);
    return months[random];
  }

  ngOnInit(): void {
    this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(posts => {
      this.posts = posts;
       this.posts = this.posts.map((post, index) => {
        post.image = this.getImage();
        return post;
      })

      this.fetched = true;
      console.log(this.posts)
    }, error => console.error(error));


  }

}
