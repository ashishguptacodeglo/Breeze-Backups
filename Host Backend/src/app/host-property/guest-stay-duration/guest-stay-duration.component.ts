import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-guest-stay-duration',
  templateUrl: './guest-stay-duration.component.html',
  styleUrls: ['./guest-stay-duration.component.scss']
})
export class GuestStayDurationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  stayDuration = new FormGroup({
    stayDuration: new FormControl('', [Validators.required])
  })

  getstayDuration() {
    console.warn(this.stayDuration.value);
  }

}
