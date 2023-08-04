import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restaurant-amenities',
  templateUrl: './restaurant-amenities.component.html',
  styleUrls: ['./restaurant-amenities.component.scss']
})
export class RestaurantAmenitiesComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  amenitiesArray: string[] = ['Outdoor Dining Space', 'Internet/Wi-Fi','Food delivery','Wheel chair','Electrical Chargers','Smoking room','Rest room','Valet Parking','TV','Seats for infants','Drive-through','AC','Waiter','Pets'];

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
    console.log(this.amenitiesForm.value);
     this.router.navigate(['/host-restaurant/restaurant-photos'])
  }

  // Add New Amenities

  addNewAmenitiesForm = new FormGroup({
    addAmenities: new FormControl('', [Validators.required])
  });

  addNewAmenities() {
    console.warn(this.addNewAmenitiesForm.value);
  }
  goBack(){
        this.router.navigate(['/host-restaurant/restaurant-location'])
    }
}
