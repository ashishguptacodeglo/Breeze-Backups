import { Component, OnInit ,EventEmitter , Output} from "@angular/core";
@Component({
  selector: "app-video-images",
  templateUrl: "./video-images.component.html",
  styleUrls: ["./video-images.component.scss"],
})
export class VideoImagesComponent implements OnInit {
  imagesArray: any = [1, 2, 3, 4, 5, 6];
  
  files: File[] = [];
  @Output() BackEvent = new EventEmitter<string>();
  
  constructor() {}
  ngOnInit(): void {}



  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }
  
  SendBack(){
     this.BackEvent.emit("value");
  }
  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
