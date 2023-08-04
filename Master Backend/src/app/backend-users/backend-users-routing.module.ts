import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackendUsersComponent } from './backend-users.component';

const routes: Routes = [{ path: '', component: BackendUsersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendUsersRoutingModule { }
