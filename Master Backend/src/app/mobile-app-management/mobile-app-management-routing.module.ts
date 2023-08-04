import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileAppManagementComponent } from './mobile-app-management.component';

const routes: Routes = [{ path: '', component: MobileAppManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileAppManagementRoutingModule { }
