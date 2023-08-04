import { Component, OnInit } from '@angular/core';
      import { Router } from '@angular/router';

@Component({
  selector: 'app-dish-photos',
  templateUrl: './dish-photos.component.html',
  styleUrls: ['./dish-photos.component.scss']
})
export class DishPhotosComponent implements OnInit {
imagesArray: any = [1, 2, 3, 4, 5, 6];
  files: File[] = [];
  

  dropzoneType : string = "single";
  constructor(private router: Router) {

  }
  ngOnInit(): void {}

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
    this.dropzoneType = this.files.length == 0 ? "single" : 'list';
  }
  

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
    this.dropzoneType = this.files.length == 0 ? "single" : 'list';
  }
goBack(){
      this.router.navigate(['/host-restaurant/menu-photos'])
  }
moveNext(){
      this.router.navigate(['/host-restaurant/restaurant-policies'])
  }
}
