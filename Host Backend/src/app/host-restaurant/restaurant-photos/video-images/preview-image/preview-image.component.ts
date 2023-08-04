import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-preview-image',
  templateUrl: './preview-image.component.html',
  styleUrls: ['./preview-image.component.scss']
})
export class PreviewImageComponent implements OnInit {
  @Input() file:any;
  src : string = "";
  constructor() { }
  ngOnInit(): void {
    console.log(this.file.type)
    this.previewFile();
  }
  previewFile() {
    var reader = new FileReader();
    reader.onloadend = (e:any) => {
     this.src = reader.result as string;
    };
    reader.readAsDataURL(this.file);
  }

}
