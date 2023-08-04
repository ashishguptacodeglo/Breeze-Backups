import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about-property',
  templateUrl: './about-property.component.html',
  styleUrls: ['./about-property.component.scss']
})
export class AboutPropertyComponent implements OnInit {
   descriptionForm = this.fb.group({
      description: ['', Validators.required],
  });
  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.descriptionForm.value);

    if(this.descriptionForm.value.description != '')
    {
      this.router.navigate(['/host-property/property-location']);
    }
  }

  goBack() {
    this.router.navigate(['/host-property/property-timings']);
  }

}
