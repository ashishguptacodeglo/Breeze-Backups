import { Component, OnInit,EventEmitter,Output } from '@angular/core';

  
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  @Output() BackEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  ShowNextStep(){
    this.BackEvent.emit("2");
  }



}
