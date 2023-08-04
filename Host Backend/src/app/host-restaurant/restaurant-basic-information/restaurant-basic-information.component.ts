import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-basic-information',
  templateUrl: './restaurant-basic-information.component.html',
  styleUrls: ['./restaurant-basic-information.component.scss']
})

export class RestaurantBasicInformationComponent implements OnInit {
  constructor(private router: Router) {

  }
  ngOnInit(): void {
  }

  establishmentTypeArray: string[] = ['Restaurants', 'Bar', 'Cafe', 'Night Club', 'Food Truck'];
  cuisinesOfferArray: string[] = ['Indian', 'Mexican', 'Chinese', 'Italian', 'Multi-Cusine'];
  mealsOfferArray: string[] = ['Breakfast', 'Brunch', 'Lunch', 'Dinner', 'Supper'];

  onChangeFunction(controlName: string, e: any) {
    const checkedValue = e.target.value;
    const checked = e.target.checked;
    const checkedArray = this.restInformationForm.get(controlName) as FormArray;

    if (checked) {
      checkedArray.push(new FormControl(checkedValue));
    } else {
      const index = checkedArray.controls.findIndex((x) => x.value === checkedValue);
      if (index >= 0) {
        checkedArray.removeAt(index);
      }
    }

    console.log(checkedArray.value);
  }

  restInformationForm = new FormGroup({
    establishmentType: new FormArray([], [Validators.required]),
    cuisinesOffer: new FormArray([], [Validators.required]),
    mealsOffer: new FormArray([], [Validators.required]),
    animalPermission: new FormControl('', [Validators.required]),
  });



  // Add New Cuisines

  addCuisinesForm = new FormGroup({
    addCuisines: new FormControl('', [Validators.required])
  });

  addNewCuisines() {
    console.log(this.addCuisinesForm.value);
  }

  // Add New Meal

  addMealsForm = new FormGroup({
    addMeal: new FormControl('', [Validators.required])
  });

  addNewMeal() {
    console.log(this.addMealsForm.value);
  }


  getrestInformation() {
    console.log(this.restInformationForm.value);
    this.router.navigate(['/host-restaurant/restaurant-timing'])
  }
  goBack(){
      this.router.navigate(['/host-restaurant'])
  }


}
