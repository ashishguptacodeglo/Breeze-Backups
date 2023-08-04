import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-safety-hygiene',
  templateUrl: './room-safety-hygiene.component.html',
  styleUrls: ['./room-safety-hygiene.component.scss']
})
export class RoomSafetyHygieneComponent implements OnInit {


  selectedValue: any = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  roomSafetyForm = new FormGroup({
    cleanWhenOccupied: new FormControl(null, [Validators.required]),
    cleanWhenBooked: new FormControl(null, [Validators.required]),
    //laundryServices: new FormControl('', [Validators.required]),
    safetyMeasures: new FormArray([], [Validators.required])
  });

  getRoomSafetyInfo() {
    console.warn(this.roomSafetyForm.value);
    this.router.navigate(['/host-property/house-rule']);
  }

  roomCleaned = [
    { value: 1, name: 'One' },
    { value: 2, name: 'Two' },
    { value: 3, name: 'Three' },
    { value: 4, name: 'Four' },
  ];

  safetyMeasuresArray: string[] = ['24/7 Security', 'CCTV cameras (in public areas)', 'Carbon monoxide alarms', 'Smoke detectors', 'Fire extinguishers', 'Fire alarms', 'Electronic Locks'];

  safetyMeasuresOnChange(e: any) {
    const checkedValue = e.target.value;
    const checked = e.target.checked;
    const checkedArray = this.roomSafetyForm.get('safetyMeasures') as FormArray;

    if (checked) {
      checkedArray.push(new FormControl(checkedValue));
    } else {
      const index = checkedArray.controls.findIndex(x => x.value === checkedValue);
      if (index >= 0) {
        checkedArray.removeAt(index);
      }
    }

    //console.log(checkedArray.value);
  }


  itemSelected(e: any) {
    console.log(e);
  }

  goBack() {
    this.router.navigate(['/host-property/property-access-permission']);
  }

}
