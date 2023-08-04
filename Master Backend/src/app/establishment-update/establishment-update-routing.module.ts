import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstablishmentUpdateComponent } from './establishment-update.component';
import { EstDetailsComponent } from './est-details/est-details.component';

 
const routes: Routes = [
    { path: '', component: EstablishmentUpdateComponent },
    {  path: ':id', component: EstDetailsComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstablishmentUpdateRoutingModule { }
