import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {

  step: any  = 1;
  constructor() { }

  ngOnInit(): void {
  }

  setStep(step:any) {
   this.step = step;
  }


}
