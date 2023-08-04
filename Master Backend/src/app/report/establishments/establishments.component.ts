import { Component, OnDestroy, OnInit, ViewChild, Input, TemplateRef, AfterViewInit,EventEmitter,Output } from "@angular/core";

@Component({
  selector: 'app-establishments',
  templateUrl: './establishments.component.html',
  styleUrls: ['./establishments.component.scss']
})
export class EstablishmentsComponent implements OnInit {
 page:string = 'list'
  constructor() { }

  ngOnInit(): void {
  }
    @Output() BackEvent = new EventEmitter<string>();
   ShowTab(page:any){
    this.page = page;
    if(this.page == 'est-details'){
      this.BackEvent.emit(this.page);
    }
    
  }

}
