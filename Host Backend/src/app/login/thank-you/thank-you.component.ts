import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
 @Input() message: any = "Thank You!";
  constructor() { }

  ngOnInit(): void {
  }

}
