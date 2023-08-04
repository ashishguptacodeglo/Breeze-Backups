import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  @Input() width:number = 0;
  @Input() active:number = 0;

  menusList : string[] = [
    "Primary Info","Basic info","Location","Detailed info","Finish"
  ];
  constructor() { }

  ngOnInit(): void {
    console.log(this.active)
  }

}
