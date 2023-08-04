import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-house-rule',
  templateUrl: './property-house-rule.component.html',
  styleUrls: ['./property-house-rule.component.scss']
})
export class PropertyHouseRuleComponent implements OnInit {

  timeArray: any = [];
  showQuiteHoursTiming = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    var d = new Date(),
      h = 0.00,
      m = 0,
      meridiem = ['AM', 'PM'];
    for (var i = h; i < 24; ++i) {
      for (var j = i == h ? Math.ceil(m / 15) : 0; j < 4; ++j) {
        var time = i % 12 + ':' + (j * 15 || '00') + ' ' + meridiem[i / 12 | 0];
        this.timeArray.push({ value: time, name: time });
      }
    }
  }

  getSelectedValue(value: any) {

  }

  onQuiteHoursChange(value: string): void {
    this.showQuiteHoursTiming = value === '0';
  
    if (value === '1') {
      this.propertyRulesForm.get('quiteHoursCheckinTime')?.clearValidators();
      this.propertyRulesForm.get('quiteHoursCheckoutTime')?.clearValidators();
      this.propertyRulesForm.get('quiteHoursCheckinTime')?.updateValueAndValidity();
      this.propertyRulesForm.get('quiteHoursCheckoutTime')?.updateValueAndValidity();
    } else {
      this.propertyRulesForm.get('quiteHoursCheckinTime')?.setValidators([Validators.required]);
      this.propertyRulesForm.get('quiteHoursCheckoutTime')?.setValidators([Validators.required]);
      this.propertyRulesForm.get('quiteHoursCheckinTime')?.updateValueAndValidity();
      this.propertyRulesForm.get('quiteHoursCheckoutTime')?.updateValueAndValidity();
    }
  }
  

  propertyRulesForm = new FormGroup({
    CheckinTime: new FormControl(null, [Validators.required]),
    CheckoutTime: new FormControl(null, [Validators.required]),
    CheckoutRules: new FormControl('', [Validators.required]),
    quiteHours: new FormControl('', [Validators.required]),
    quiteHoursCheckinTime: new FormControl(null, [Validators.required]),
    quiteHoursCheckoutTime: new FormControl(null, [Validators.required]),
  });


  getPropertyRulesInfo() {
    console.warn(this.propertyRulesForm.value);
    this.router.navigate(['/host-property/thankyou']);
  }

  goBack() {
    this.router.navigate(['/host-property/room-safety-hygiene']);
  }

}
