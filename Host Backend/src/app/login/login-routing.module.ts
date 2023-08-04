import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { ThankYouComponent } from './thank-you/thank-you.component';


const routes: Routes = [
    { path: '', component: LoginFormComponent },
    // { path: 'reset-password', component: ResetPasswordComponent },
    // { path: 'create-password', component: CreatePasswordComponent },
    { path: 'new-password', component: CreatePasswordComponent },
    { path: 'thank-you', component: ThankYouComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
