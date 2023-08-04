import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import Validation from "../utils/validation";
import { AuthLoginService } from "../../services/login/auth-login.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-create-password",
  templateUrl: "./create-password.component.html",
  styleUrls: ["./create-password.component.scss"],
})
export class CreatePasswordComponent implements OnInit {


  loginForm = this.fb.group(
    {
      password: ["", 
       Validators.compose([
          Validators.required,
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ]
      )
      ],
          
      confirmPassword: ["", 
       Validators.compose([
          Validators.required,
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ]
      )
      ],
    },
    {
      validators: [Validation.match("password", "confirmPassword")],
    }
  );

  password1: any = "password";
  password2: any = "password";
  showPassword1 = false;
  showPassword2 = false;
  showSuccess = false;



  toggleShow(number: any) {
    if (number == 1) {
      if (this.password1 === "password") {
        this.password1 = "text";
        this.showPassword1 = true;
      } else {
        this.password1 = "password";
        this.showPassword1 = false;
      }
    } else {
      if (this.password2 === "password") {
        this.password2 = "text";
        this.showPassword2 = true;
      } else {
        this.password2 = "password";
        this.showPassword2 = false;
      }
    }
  }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private auth: AuthLoginService
  ) {

  }
  isloading: boolean = true;

  routhAuth: any;
  mailLinkStatus: boolean = false;
  ShowSuccess: boolean = false;
  mailSendMessage: any = "";

  verifyTokenStatus: boolean = false;
  verifyTokenMessage: any = "";

  userData: any;
  errorMsg: any;

  error: any = {};
  ShowResendMail : boolean = false;
  ngOnInit(): void {
     this.routhAuth = this.route.snapshot.paramMap.get('auth');
  }
  onSubmit() {
       this.auth.resetPassword({password:this.loginForm.value?.password},this.routhAuth).subscribe(
          (results:any)=>{
            if(results?.statusCode == 200){
               this.loginForm.reset();
              this.showSuccess = true;
            }else{
              // /login/reset-password
               this.verifyTokenStatus = true
              this.verifyTokenMessage = (results?.statusCode == 200)
              this.errorMsg = results.customMessage
              this.loginForm.reset();

              if(results?.statusCode == 401){
                this.ShowResendMail =true;
              }
             
            }
        },(error:any)=>{
          this.errorMsg = error.error.customMessage;
        }) 

  }
}
