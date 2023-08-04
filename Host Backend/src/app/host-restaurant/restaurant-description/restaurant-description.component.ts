import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
 import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-description',
  templateUrl: './restaurant-description.component.html',
  styleUrls: ['./restaurant-description.component.scss']
})
export class RestaurantDescriptionComponent implements OnInit {

  descriptionForm = this.fb.group({
    description: ['', Validators.required],
});
constructor(private fb: FormBuilder,private router: Router) { }

ngOnInit(): void {
}

onSubmit() {
  console.log(this.descriptionForm.value);
  this.router.navigate(['/host-restaurant/table-type'])
}
goBack(){
      this.router.navigate(['/host-restaurant/restaurant-timing'])
  }

}
