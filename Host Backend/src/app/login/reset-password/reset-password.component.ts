import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { AuthLoginService } from '../../services/login/auth-login.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

    loginForm = this.fb.group({
         email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,10}$')]],
    });
    errorMsg: string = '';
    ShowSuccess : boolean = false;
    email :  any  = "";
    constructor(public router: Router,private fb: FormBuilder, private authLoginService: AuthLoginService) {}
    ngOnInit(): void {}
    
    onSubmit() {
        this.email = this.loginForm.value?.email;

        //  Send Reset Password Link
        this.authLoginService.SendResetPasswordLink({email:this.loginForm.value?.email,type:2}).subscribe(
          (results:any)=>{
            this.errorMsg = "";
            this.ShowSuccess = true;
            this.loginForm.reset();
        },(error:any)=>{
            console.log(error)
          this.errorMsg = error.error.customMessage;
        }) 


          // Verify Email Code
        // this.authLoginService.resetPassword({email:this.loginForm.value?.email,type:1}).subscribe(
        //   (results:any)=>{
        //     this.errorMsg = "";
        //     this.ShowSuccess = true;
        //     this.loginForm.reset();
        // },(error:any)=>{
        //     console.log(error)
        //   this.errorMsg = error.error.customMessage;
        // })

    }

}
