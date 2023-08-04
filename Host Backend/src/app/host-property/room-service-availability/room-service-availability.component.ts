import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-service-availability',
  templateUrl: './room-service-availability.component.html',
  styleUrls: ['./room-service-availability.component.scss']
})
export class RoomServiceAvailabilityComponent implements OnInit {

  roomAvailabilityForm: FormGroup;

  constructor(private router: Router) {
    this.roomAvailabilityForm = new FormGroup({
      availability: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  availability = [
    { value: 'Yes', name: 'Yes' },
    { value: 'No', name: 'No' }
  ];

  itemSelected(e: any) {
    console.log(e);
  }

  getRoomAvailabilityInfo() {
    console.warn(this.roomAvailabilityForm.value.availability);

    if (this.roomAvailabilityForm.value.availability === 'Yes') {
      this.router.navigate(['/host-property/property-timings']);
    } else if (this.roomAvailabilityForm.value.availability === 'No') {
      this.router.navigate(['/host-property/property-photos']);
    }
  }

  goBack() {
    this.router.navigate(['/host-property/place-type']);
  }


}
