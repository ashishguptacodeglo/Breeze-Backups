import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BreazeAuthGuard } from './auth/breaze-auth.guard'
import { VerifyEmailComponent } from './login/verify-email/verify-email.component';
import { CreatePasswordComponent } from './login/create-password/create-password.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login'},
  { path: 'host-property', loadChildren: () => import('./host-property/host-property.module').then(m => m.HostPropertyModule),canActivate: [BreazeAuthGuard]},
  { path: 'host-restaurant', loadChildren: () => import('./host-restaurant/host-restaurant.module').then(m => m.HostRestaurantModule),canActivate: [BreazeAuthGuard] },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule), canActivate: [BreazeAuthGuard]},
  { path: 'new-password/:auth', component: CreatePasswordComponent },
  { path: 'auth', children:[
     {path:'', redirectTo: '/login', pathMatch: 'full'},
     {
      path:'verify-email', children: [
        {path: '', component: VerifyEmailComponent,canActivate: [BreazeAuthGuard]},
        {path: ':auth', component: VerifyEmailComponent}
      ]
     },
    ]
  },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'get-started', loadChildren: () => import('./get-started/get-started.module').then(m => m.GetStartedModule),canActivate: [BreazeAuthGuard]},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) , canActivate: [BreazeAuthGuard]},
  // { path: 'establishment-info/:id', loadChildren: () => import('./establishment-info/establishment-info.module').then(m => m.EstablishmentInfoModule) },
  { path: 'establishment-info', loadChildren: () => import('./establishment-info/establishment-info.module').then(m => m.EstablishmentInfoModule) },
  { path: 'verify-property', loadChildren: () => import('./verify-property/verify-property.module').then(m => m.VerifyPropertyModule) },
  { path: 'notification-settings', loadChildren: () => import('./notification-settings/notification-settings.module').then(m => m.NotificationSettingsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
