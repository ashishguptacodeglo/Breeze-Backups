import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-est-photos',
  templateUrl: './est-photos.component.html',
  styleUrls: ['./est-photos.component.scss']
})
export class EstPhotosComponent implements OnInit {

  fetched : boolean = false;
  photos : any = [];

  tab = 'categorylist';
  constructor(private http: HttpClient) {
  }

   getRandomStatus() {
    const months = ["Main Image", "Standard rooms", "Facilities","Video 360","Dining"];
    const random = Math.floor(Math.random() * months.length);
    return months[random];
  }

  ngOnInit(): void {
    this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(posts => {
      this.photos = posts;
        this.photos = this.photos.map((photo, index) => {
        photo.category = this.getRandomStatus();
        return photo;
      })

      console.log(this.photos);
      this.fetched = true;
    }, error => console.error(error));

  }
  

 setStep(tab:any){
  this.tab = tab;
 }



}
