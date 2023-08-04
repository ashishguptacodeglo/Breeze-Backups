import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-type',
  templateUrl: './place-type.component.html',
  styleUrls: ['./place-type.component.scss']
})
export class PlaceTypeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  hostType = new FormGroup({
    hostName: new FormControl('', [Validators.required])
  })


  getPlaceType() {
    console.warn(this.hostType.value);

    if (this.hostType.value.hostName === 'Host Rooms') {
      this.router.navigate(['/host-property/room-type']);
    }
    else if (this.hostType.value.hostName === 'Host Entire property') {
      this.router.navigate(['/host-property/host-entire-property']);
    }

  }

  goBack() {
    this.router.navigate(['/host-property/describe-property']);
  }



}
