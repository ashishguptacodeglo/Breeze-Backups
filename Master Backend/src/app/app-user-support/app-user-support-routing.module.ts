import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUserSupportComponent } from './app-user-support.component';

const routes: Routes = [{ path: '', component: AppUserSupportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppUserSupportRoutingModule { }
