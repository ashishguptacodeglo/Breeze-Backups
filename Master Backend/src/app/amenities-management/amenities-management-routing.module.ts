import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmenitiesManagementComponent } from './amenities-management.component';

const routes: Routes = [{ path: '', component: AmenitiesManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmenitiesManagementRoutingModule { }
