import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-photos',
  templateUrl: './property-photos.component.html',
  styleUrls: ['./property-photos.component.scss']
})
export class PropertyPhotosComponent implements OnInit {
  amenitiesArray: string[] = [
    'Main Image',
    'Rooms',
    'Facilities',
    'Dining',
    'Video/360'
  ];
  tab: string = "list";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  amenitiesForm = new FormGroup({
    amenities: new FormArray([], [Validators.required])
  });


  amenitiesOnChange(e: any) {
    const checkedValue = e.target.value;
    const checked = e.target.checked;

    const checkedArray = this.amenitiesForm.get('amenities') as FormArray;
    if (checked) {
      checkedArray.push(new FormControl(checkedValue));
    }
    else {
      let i: number = 0;
      checkedArray.controls.forEach((item) => {
        if (item.value == checkedValue) {
          checkedArray.removeAt(i);
        }
        i++;
      });
    }
  }

  getAmenitiesInfo() {
    console.warn(this.amenitiesForm.value);
  }

  ChangeTab(event: any) {
    this.tab = "list";
  }
  addNewAmenitiesForm = new FormGroup({
    addAmenities: new FormControl('', [Validators.required])
  });

  addNewAmenities() {
    console.warn(this.addNewAmenitiesForm.value);
  }

  moveNext() {
    this.router.navigate(['/host-property/property-policies']);
  }

  goBack() {
    this.router.navigate(['/host-property/room-service-availability']);
  }

}
