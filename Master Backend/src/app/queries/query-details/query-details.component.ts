import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-query-details',
  templateUrl: './query-details.component.html',
  styleUrls: ['./query-details.component.scss']
})
export class QueryDetailsComponent implements OnInit {

  @Input() type: any = '';
  constructor() { }

  ngOnInit(): void {
    console.log(this.type)
  }

}
