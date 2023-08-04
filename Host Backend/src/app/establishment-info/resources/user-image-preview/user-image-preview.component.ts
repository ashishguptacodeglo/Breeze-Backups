import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-user-image-preview',
  templateUrl: './user-image-preview.component.html',
  styleUrls: ['./user-image-preview.component.scss']
})
export class UserImagePreviewComponent implements OnInit {

  @Input() file:any;
  src : string = "";
  @Output() BackEvent = new EventEmitter<string>();

  constructor() { }
  ngOnInit(): void {
    this.previewFile();
  }
  previewFile() {
    var reader = new FileReader();
    reader.onloadend = (e:any) => {
     this.src = reader.result as string;
    };
    reader.readAsDataURL(this.file);
  }

  ClickBack(){
     this.BackEvent.emit("2");
  }

}
