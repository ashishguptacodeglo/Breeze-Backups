import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovalComponent } from './approval.component';
import { EstDetailsComponent } from './est-details/est-details.component';

const routes: Routes = [
    { path: '', component: ApprovalComponent },
    {  path: ':id', component: EstDetailsComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovalRoutingModule { }
