import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restaurant-photos',
  templateUrl: './restaurant-photos.component.html',
  styleUrls: ['./restaurant-photos.component.scss']
})
export class RestaurantPhotosComponent implements OnInit {

  constructor(private router: Router) {

  }
  ngOnInit(): void {
  }
 amenitiesArray: string[] = [
    'Main Image',
    'Kitchen', 
    'Food', 
    'Dining'
  ];
 tab : string = "list";
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
  }

  ChangeTab(event:any){
    this.tab = "list";
  }
  addNewAmenitiesForm = new FormGroup({
    addAmenities: new FormControl('', [Validators.required])
  });

  addNewAmenities() {
    console.warn(this.addNewAmenitiesForm.value);
  }
  goBack(){
      this.router.navigate(['/host-restaurant/restaurant-amenities'])
  }
  moveNext(){
      this.router.navigate(['/host-restaurant/menu-photos'])
  }
}
