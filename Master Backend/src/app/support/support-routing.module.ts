import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportComponent } from './support.component';
import { SupportTicketDetailsComponent } from './support-ticket-details/support-ticket-details.component';

const routes: Routes = [
    { path: '', component: SupportComponent },
    { path: ':id', component: SupportTicketDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }
