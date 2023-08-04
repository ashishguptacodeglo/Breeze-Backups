import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ResendVerificationMailComponent } from './verify-email/resend-verification-mail/resend-verification-mail.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    ResetPasswordComponent,
    CreatePasswordComponent,
    ThankYouComponent,
    VerifyEmailComponent,
    ResendVerificationMailComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
