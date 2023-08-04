import { Component, OnInit } from '@angular/core';
import { Validators, FormControl,FormGroup,FormArray, AbstractControl,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-types-of-beds',
  templateUrl: './types-of-beds.component.html',
  styleUrls: ['./types-of-beds.component.scss']
})
export class TypesOfBedsComponent implements OnInit {
  amenitiesForm = new FormGroup({
    amenities: new FormArray([], [Validators.required])
  });

  selectBedsize: string= "";
  bedsList = [
      {  value: 'Single',name:"Single size" },
      {  value: 'Double',name:"Double Size" },
      { value: 'Queen',name:"Queen Size" },
      {value: 'King',name:"King Size" },
  ];
  form = this.fb.group({
      value: ['', Validators.required],
  });
  isvalid = false;
constructor(private fb: FormBuilder) { 
  }

  ngOnInit(): void {
    console.log(this.selectBedsize,this.bedsList)
  }
    getSelectedValue(){
    this.isvalid = this.selectBedsize !== null ? true : false;
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.form.value);
  }

  

  getAmenitiesInfo() {
    console.warn(this.amenitiesForm.value);
  }

  // Add New Amenities

  addNewAmenitiesForm = new FormGroup({
    addAmenities: new FormControl('', [Validators.required])
  });

  addNewAmenities() {
    console.warn(this.addNewAmenitiesForm.value);
  }

}
