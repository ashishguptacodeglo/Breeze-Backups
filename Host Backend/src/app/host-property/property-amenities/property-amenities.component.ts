import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-amenities',
  templateUrl: './property-amenities.component.html',
  styleUrls: ['./property-amenities.component.scss']
})
export class PropertyAmenitiesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  amenitiesArray: string[] = ['Swimming pool', 'Internet/Wi-Fi', 'Luggage Storage', 'Prayer Room', 'Electrical Chargers', 'Balcony/Terrace', 'Wake-up Call','Valet Parking','Cribs/Infant Beds','Fitness Center/Gym','Spa','Golf course','Nightclub','Kettle','Ironing board','TV','Torch','Umberlla'];

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
    this.router.navigate(['/host-property/room-service-availability']);
  }

  // Add New Amenities

  addNewAmenitiesForm = new FormGroup({
    addAmenities: new FormControl('', [Validators.required])
  });

  addNewAmenities() {
    console.warn(this.addNewAmenitiesForm.value);
  }

  goBack() {
    this.router.navigate(['/host-property/property-location']);
  }

}
