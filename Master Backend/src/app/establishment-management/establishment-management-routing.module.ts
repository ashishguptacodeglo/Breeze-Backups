import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstablishmentManagementComponent } from './establishment-management.component';
import { EstDetailsComponent } from '../establishment-management/est-details/est-details.component';


const routes: Routes = [
    { path: '', component: EstablishmentManagementComponent },
    {  path: ':id', component: EstDetailsComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstablishmentManagementRoutingModule { }
