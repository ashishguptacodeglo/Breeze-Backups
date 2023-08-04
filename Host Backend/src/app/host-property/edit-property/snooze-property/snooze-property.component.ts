import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-snooze-property',
  templateUrl: './snooze-property.component.html',
  styleUrls: ['./snooze-property.component.scss']
})
export class SnoozePropertyComponent implements OnInit {

  regionsToSnooze: any = [
    {"name":"I have legal concerns"},
    {"name":"I’m not able to host because of external conditions like Covid-19"},
    {"name":"I only want to host guests at certain time"},
    {"name":"Breeze is difficult for me to use"},
    {"name":"My place is not available for the guests right now"},
    {"name":"I have other reasons"},
  ];

  stepsDone : any = {
    step1:false,
    step2:false,
  }
  constructor() { }

  ngOnInit(): void {
  }  


  SnoozeStep1()
  {
    console.log("Hi Submit is Triggered");
  }

}
