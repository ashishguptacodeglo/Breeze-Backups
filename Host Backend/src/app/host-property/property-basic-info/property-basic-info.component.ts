import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-property-basic-info',
  templateUrl: './property-basic-info.component.html',
  styleUrls: ['./property-basic-info.component.scss']
})
export class PropertyBasicInfoComponent implements OnInit {

    basicInfoForm = this.fb.group({
      no_rooms_available: ['',Validators.required],
      no_rooms_allocate_to_breeze: ['',Validators.required],
      no_guests_stay_on_place: ['',Validators.required],
      no_bed_rooms: ['',Validators.required],
      no_beds: ['',Validators.required],
      no_private_bathrooms: ['',Validators.required],
      no_shared_bathrooms: ['',Validators.required],
      is_kiteched_service: ['',Validators.required],
      no_guests_stay: ['',Validators.required]
  });

  constructor(private fb: FormBuilder) { 

  }

  ngOnInit(): void {

    // this.SelectOptions = [
    //   {option_label:"How many total rooms are available?",option_values:[1,2,3,4,5,6,7,8,9,10]},
    //   {option_label:"How many out of that allocate to Breeze?",option_values:[1,2,3,4,5,6,7,8,9,10]},
    //   {option_label:"How many guests can stay at your place?",option_values:[4,5,6,10,15]},

    //   {option_label:"How many bedrooms are available?",option_values:[1,2,3,4,5,6,7,8,9,10]},
    //   {option_label:"How many beds are available?",option_values:[1,2,3,4,5,6,7,8,9,10]},
    //   {option_label:"How many private bathrooms are available?",option_values:[1,2,3,4,5,6,7,8,9,10]},

    //   {option_label:"How many shared bathrooms are available?",option_values:[1,2,3,4,5,6,7,8,9,10]},
    //   {option_label:"Is Kitchen and room service available?",option_values:["Yes","No"]},
    //   {option_label:"How many guests can stay?",option_values:[10,20,30,40,50]},
    // ];
  }
   onSubmit() {
    console.log(this.basicInfoForm.value);
  }

}
