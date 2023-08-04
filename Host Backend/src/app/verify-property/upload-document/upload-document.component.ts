import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.scss']
})
export class UploadDocumentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.addDocument();
  }

  exceedSize: boolean = true;
  verFailed: boolean = false;
  faxFileSize:number = 5;
  documents: any[] = [];

  addDocument() {
    const document = {
      index: this.documents.length + 1,
      exceedSize: false,
      verFailed: false,
      fileName:""
    };
    this.documents.push(document);
  }
  shortName(text, count, insertDots){
    return text.slice(0, count) + (((text.length > count) && insertDots) ? "..." : "");
  }
  getFileDetails(event:any,index:any){
    const file = event.target.files[0];
    const maxSize = 1024 * 1024 * this.faxFileSize;
    var fileName = file.name.split('.').slice(0, -1).join('.');
    var ext = file.name.split('.').pop()
     this.documents[index].fileName = this.shortName(fileName, 10, true)+'.'+ext;
     this.documents[index].exceedSize = file.size > maxSize;
  }

  generateDiv() {
    this.addDocument();
  }

}
