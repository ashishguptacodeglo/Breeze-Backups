import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-access-permission',
  templateUrl: './property-access-permission.component.html',
  styleUrls: ['./property-access-permission.component.scss']
})
export class PropertyAccessPermissionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  propertyAccessForm = new FormGroup({
    maritalStatus: new FormControl('', [Validators.required]),
    adultStatus: new FormControl('', [Validators.required]),
    kidsPermission: new FormControl('', [Validators.required]),
    petsPermission: new FormControl('', [Validators.required]),
  });

  getPropertyAccessInfo() {
    console.warn(this.propertyAccessForm.value);
    this.router.navigate(['/host-property/room-safety-hygiene']);
  }

  goBack() {
    this.router.navigate(['/host-property/property-policies']);
  }


}
