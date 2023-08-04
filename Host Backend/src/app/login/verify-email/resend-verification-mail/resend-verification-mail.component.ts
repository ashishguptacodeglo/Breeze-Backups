import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AbstractControl, FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthLoginService } from '../../../services/login/auth-login.service'

@Component({
  selector: 'app-resend-verification-mail',
  templateUrl: './resend-verification-mail.component.html',
  styleUrls: ['./resend-verification-mail.component.scss']
})
export class ResendVerificationMailComponent implements OnInit {
    @Input() error: any = "";

    loginForm = this.fb.group({
       email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,10}$')]],
    });
    errorMsg: string = '';
    ShowSuccess : boolean = false;
    email :  any  = "";

  constructor(private fb: FormBuilder,private route: ActivatedRoute, private auth: AuthLoginService) {

  }

  ngOnInit(): void {
    console.log(this.error)
  }
 onSubmit() {
        this.email = this.loginForm.value?.email;
        this.auth.SendResetPasswordLink({email:this.loginForm.value?.email,type:1}).subscribe(
          (results:any)=>{
            this.errorMsg = "";
            this.ShowSuccess = true;
            this.loginForm.reset();
        },(error:any)=>{
            console.log(error)
          this.errorMsg = error.error.customMessage;
        })

    }
}
