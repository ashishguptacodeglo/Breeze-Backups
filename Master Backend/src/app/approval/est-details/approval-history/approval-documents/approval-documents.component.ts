import { Component, OnInit ,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-approval-documents',
  templateUrl: './approval-documents.component.html',
  styleUrls: ['./approval-documents.component.scss']
})
export class ApprovalDocumentsComponent implements OnInit {
  documents: any[] = [
  {
    name : "Proof of ownership or authorization to rent the property (property deed or rental agreement with owner)",
    doc:"assets/documents/sample.pdf",
    doc_name:"Lorem Ispum Dorem.pdf",
    status:this.getRandomStatus()
  },{
    name : "Valid government-issued ID",
    doc:"assets/documents/sample.pdf",
    doc_name:"Lorem Ispum Dorem.pdf",
    status:this.getRandomStatus()
  },{
    name : "Business license or permit (if required by local laws)",
    doc:"assets/documents/sample.pdf",
    doc_name:"Lorem Ispum Dorem.pdf",
    status:this.getRandomStatus()
  },{
    name : "Insurance documentation",
    doc:"assets/documents/sample.pdf",
    doc_name:"Lorem Ispum Dorem.pdf",
    status:this.getRandomStatus()
  },{
    name : "Tax documentation (W-9)",
    doc:"assets/documents/sample.pdf",
    doc_name:"Lorem Ispum Dorem.pdf",
    status:this.getRandomStatus()
  },{
    name : "Other documents required by local laws",
    doc:"assets/documents/sample.pdf",
    doc_name:"Lorem Ispum Dorem.pdf",
    status:this.getRandomStatus()
  }

  ];

  constructor() { }

  ngOnInit(): void {
  }
  getRandomStatus() {
     const months = ["rejected", "approved"];
    const random = Math.floor(Math.random() * months.length);
    return months[random];
  }
 estfilters = [
    { value: "approved", name: "Approved" },
    { value: "rejected", name: "Rejected" },
  ];

 statusChangeNgSelectonChange(event: any,i:any) {
    this.documents[i].status = event.value;
    this.documents[i].ismodalopen = event.value == 'rejected';  
  }
  OpenActionModal(i:any,action:boolean) {
    this.documents[i].ismodalopen = action;  
  }
  shortName(text, count, insertDots){
    return text.slice(0, count) + (((text.length > count) && insertDots) ? "..." : "");
  }
   @Output() BackEvent = new EventEmitter<string>();
  ShowHistory(){
    console.log("Go Back")
    this.BackEvent.emit("history");
  }
  

}
