import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { AuthLoginService } from '../../services/login/auth-login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

    loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,10}$')]],
      password: ['', [Validators.required]]
    }); 
    password:any="password"
    showPassword = false;
    errorMsg: string = '';
    
    constructor(public router: Router,private fb: FormBuilder, private authLoginService: AuthLoginService) { 

    }

  ngOnInit(): void {
  }

toggleShow() {
  if (this.password === 'password') {
      this.password = 'text';
      this.showPassword = true;
    } else {
      this.password = 'password';
      this.showPassword = false;
    }
  }
  onSubmit() {
    this.authLoginService.hostLogin(this.loginForm.value?.email, this.loginForm.value.password).subscribe(
      (results:any)=>{
      window.localStorage.setItem('auth_data',JSON.stringify(results?.data));
      window.localStorage.setItem('auth_token',results?.data.authToken);
      this.router.navigate(['home']);
    },(error:any)=>{
      this.errorMsg = error.error.customMessage;
    })
  }




}
