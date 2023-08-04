import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BreazeAuthGuard } from './auth/breaze-auth.guard'
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login'},
  { path: 'login', component: LoginComponent },
  { path: 'approval', loadChildren: () => import('./approval/approval.module').then(m => m.ApprovalModule) },
  { path: 'establishment-update', loadChildren: () => import('./establishment-update/establishment-update.module').then(m => m.EstablishmentUpdateModule) },
  { path: 'establishment-management', loadChildren: () => import('./establishment-management/establishment-management.module').then(m => m.EstablishmentManagementModule) },
  { path: 'cms', loadChildren: () => import('./content-management/content-management.module').then(m => m.ContentManagementModule) },
  { path: 'support', loadChildren: () => import('./support/support.module').then(m => m.SupportModule) },
  { path: 'notifications', loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule) },
  { path: 'amenities-management', loadChildren: () => import('./amenities-management/amenities-management.module').then(m => m.AmenitiesManagementModule) },
  { path: 'backend-users', loadChildren: () => import('./backend-users/backend-users.module').then(m => m.BackendUsersModule) },
  { path: 'mobile-app-management', loadChildren: () => import('./mobile-app-management/mobile-app-management.module').then(m => m.MobileAppManagementModule) },
  { path: 'app-user-support', loadChildren: () => import('./app-user-support/app-user-support.module').then(m => m.AppUserSupportModule) },
  { path: 'report', loadChildren: () => import('./report/report.module').then(m => m.ReportModule) },
  { path: 'queries', loadChildren: () => import('./queries/queries.module').then(m => m.QueriesModule) },
  { path: 'influencers', loadChildren: () => import('./influencers/influencers.module').then(m => m.InfluencersModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
