import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AbstractControl, FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthLoginService } from '../../services/login/auth-login.service'

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  isloading: boolean =  true;
  message: string =  ""
  routhAuth:any 
  verifyTokenStatus:boolean = false;
  verifyTokenMessage: any = ''
  userData:any;
  error:any = {}

  constructor(private route: ActivatedRoute, private auth: AuthLoginService) { }

  ngOnInit(): void {
    this.routhAuth = this.route.snapshot.paramMap.get('auth');
    this.confirmLink()
  }



  confirmLink() {
    this.isloading = true;
      this.auth.confirmEmailVerification(this.routhAuth).subscribe((data:any) => {
      this.verifyTokenStatus = true
      this.verifyTokenMessage = (data?.statusCode == 200);

      console.log(this.verifyTokenMessage)
      this.error = data.customMessage;
      this.isloading = false;
      this.message = "Email Verified Successfully";
    }, (error) => {
      this.isloading = false;
      this.error = error.customMessage
    });   
  }

}
