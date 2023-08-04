import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-est-catgory-images',
  templateUrl: './est-catgory-images.component.html',
  styleUrls: ['./est-catgory-images.component.scss']
})
export class EstCatgoryImagesComponent implements OnInit {
 @Output() BackEvent = new EventEmitter<string>();
  fetched : boolean = false;
  photos : any = [];
  constructor(private http: HttpClient) {
  }

  getRandomStatus() {
    const newlyAdded = ["newlyAdded",""];
    const random = Math.floor(Math.random() * newlyAdded.length);
    return newlyAdded[random];
  }

  ngOnInit(): void {
    this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(posts => {
      this.photos = posts;
        this.photos = this.photos.map((photo, index) => {
        photo.newlyAdded = this.getRandomStatus();
        return photo;
      })

      this.fetched = true;
    }, error => console.error(error));

  }

   ShowImage(){
    this.BackEvent.emit("categorylist");
  }

}
