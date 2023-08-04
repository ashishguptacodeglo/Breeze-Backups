import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-describe-property',
  templateUrl: './describe-property.component.html',
  styleUrls: ['./describe-property.component.scss']
})
export class DescribePropertyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  propertyType = new FormGroup({
    propertyItem: new FormControl('', [Validators.required])
  })

  getPropertyType() {
    console.warn(this.propertyType.value);
    this.router.navigate(['/host-property/property-location']);
  }

  goBack() {
    this.router.navigate(['/host-property/place-type']);
  }

}
