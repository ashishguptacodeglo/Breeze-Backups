import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstablishmentInfoComponent } from './establishment-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstablishmentManagementComponent } from './establishment-management/establishment-management.component';
import { BookingManagementComponent } from './booking-management/booking-management.component';
import { PricingManagementComponent } from './pricing-management/pricing-management.component';
import { InfluencerComponent } from './influencer/influencer.component';
import { ReviewManagementComponent } from './review-management/review-management.component';
import { MessagesComponent } from './messages/messages.component';
import { TaskComponent } from './task/task.component';

import { ResourcesComponent } from './resources/resources.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentDetailsComponent } from './departments/department-details/department-details.component';
import { TaskDetailsComponent } from './task/task-details/task-details.component';

import { SupportComponent } from './support/support.component';
import { SupportTicketDetailsComponent } from './support/support-ticket-details/support-ticket-details.component';
import { InviteDetailsComponent } from './influencer/invite-influencer/invite-details/invite-details.component';


const routes: Routes = [
    {  path: '', component: DashboardComponent },
    {  path: 'dashboard', component: DashboardComponent},
    {  path: 'booking-management', component: BookingManagementComponent },
    {  path: 'establishment-management', component: EstablishmentManagementComponent },
    {  path: 'pricing-management', component: PricingManagementComponent },
    {  path: 'messages', component: MessagesComponent },
    {  path: 'influencer', component: InfluencerComponent },
    {  path: 'influencer/invites/:id', component: InviteDetailsComponent },
    {  path: 'review-management', component: ReviewManagementComponent },
    {  path: 'task', component: TaskComponent },
    {  path: 'task/:id', component: TaskDetailsComponent },
    {  path: 'team', component: ResourcesComponent },
    {  path: 'departments', component: DepartmentsComponent },
    {  path: 'departments/:id', component: DepartmentDetailsComponent },
    {  path: 'support', component: SupportComponent },
    {  path: 'support/:id', component: SupportTicketDetailsComponent },
   ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstablishmentInfoRoutingModule { }
