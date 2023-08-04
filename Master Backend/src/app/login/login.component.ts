import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthLoginService } from '../services/login/auth-login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailForm = this.fb.group({
    email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,10}$')]],
  });

  modal: any = {};
  tabIndex: number = 0;
  interval: any;
  otpTimer: any;
  otpNumber: any = '';
  isDisabled: boolean = true;
  results: any;
  @ViewChild('ngOtpInput') ngOtpInputRef: any;

  constructor(public router: Router, private fb: FormBuilder, private authLoginService: AuthLoginService) {

  }


  // 
  ngOnInit(): void {
  }

  sendOtp() {

    console.log(this.emailForm.value);
    this.modal.email = this.emailForm.value.email
    this.tabIndex = 1;
    // this.startCountdown(9);
    this.ngOtpInputRef.setValue('');

    // this.auth.sendOtp(this.modal).subscribe((results:any)=> {
    //   if (results.statusCode == 200) {
    //     this.tabIndex = 1;
    //     this.startCountdown(9);
    //     this.ngOtpInputRef.setValue('');
    //     this.toastrService.success(results.customMessage ? results.customMessage : MailSuccess);
    //   }

    // });
  }

  back() {
    this.tabIndex = 0;
    this.otpNumber = '';
    clearInterval(this.interval);
  }
  startCountdown(seconds: any) {
    let counter = seconds;
    this.interval = setInterval(() => {
      this.otpTimer = "00:0" + counter
      counter--;

      if (counter < 0) {
        clearInterval(this.interval);
        this.otpTimer = 0
      }
    }, 1000);
  }
  onOtpChange(e: any) {
    this.otpNumber = e
    if (e.length == 4) {
      this.isDisabled = false
    } else {
      this.isDisabled = true
    }
  }
  otplogin() {
    let loginModel = {
      email: this.modal.email,
      browser: navigator.userAgent,
      ipaddress: '',
      OTP: this.otpNumber
    }
    this.authLoginService.getUserIp().toPromise().then((data: any) => {
      loginModel.ipaddress = data.ip;
      console.log(loginModel);
      //   this.auth.login(loginModel).subscribe((data:any)=>{
      //     this.results = data
      //     this.dataService.triggerLogin(true);
      //     this.dataService.userDetails(this.results.data);
      //     window.localStorage.setItem('auth_token',this.results.data.authToken);
      //     window.localStorage.setItem('user_data',JSON.stringify(this.results.data));
      //     console.log(this.results)
      //     this.router.navigate(['/establishment-info']);
      //   });
    }).catch((error: any) => { });
  }


}
