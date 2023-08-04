import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule , ReactiveFormsModule} from '@angular/forms'; 
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgApexchartsModule } from "ng-apexcharts";



import { EstablishmentInfoRoutingModule } from './establishment-info-routing.module';
import { EstablishmentInfoComponent } from './establishment-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstablishmentManagementComponent } from './establishment-management/establishment-management.component';
import { PricingManagementComponent } from './pricing-management/pricing-management.component';
import { ReviewManagementComponent } from './review-management/review-management.component';
import { SupportComponent } from './support/support.component';
import { InfluencerComponent } from './influencer/influencer.component';
import { MenuModule } from '../menu/menu.module';
import { BookingManagementComponent } from './booking-management/booking-management.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BookingRequestsComponent } from './booking-management/booking-requests/booking-requests.component';
import { UpcomingBookingsComponent } from './booking-management/upcoming-bookings/upcoming-bookings.component';
import { CurrentlyHostingComponent } from './booking-management/currently-hosting/currently-hosting.component';
import { DeclinedComponent } from './booking-management/declined/declined.component';
import { MessagesComponent } from './messages/messages.component';
import { RestaurantInfoComponent } from './establishment-management/restaurant-info/restaurant-info.component';
import { PropertyInfoComponent } from './establishment-management/property-info/property-info.component'


import { RrpComponent } from './review-management/rrp/rrp.component';
import { EstablismentReviewsComponent } from './review-management/establisment-reviews/establisment-reviews.component';

import { ResolvedReviewsComponent } from './review-management/rrp/resolved-reviews/resolved-reviews.component';
import { AllReviewsComponent } from './review-management/rrp/all-reviews/all-reviews.component';
import { AllMessagesComponent } from './messages/all-messages/all-messages.component';
import { InfluencerMessagesComponent } from './messages/influencer-messages/influencer-messages.component';

import { TaskComponent } from './task/task.component';
import { PostRequestsComponent } from './influencer/post-requests/post-requests.component';
import { ApprovedPostsComponent } from './influencer/approved-posts/approved-posts.component';
import { PostCreatorsComponent } from './influencer/post-creators/post-creators.component';
import { InviteInfluencerComponent } from './influencer/invite-influencer/invite-influencer.component';

import { ResourcesComponent } from './resources/resources.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentDetailsComponent } from './departments/department-details/department-details.component';
import { TaskDetailsComponent } from './task/task-details/task-details.component';
import { SupportTicketDetailsComponent } from './support/support-ticket-details/support-ticket-details.component';
import { UserImagePreviewComponent } from './resources/user-image-preview/user-image-preview.component';
import { InviteDetailsComponent } from './influencer/invite-influencer/invite-details/invite-details.component';
import { IndividualPricingsComponent } from './pricing-management/individual-pricings/individual-pricings.component';
import { WholePricingsComponent } from './pricing-management/whole-pricings/whole-pricings.component';



@NgModule({
  declarations: [
    EstablishmentInfoComponent,
    DashboardComponent,
    EstablishmentManagementComponent,
    PricingManagementComponent,
    ReviewManagementComponent,
    SupportComponent,
    InfluencerComponent,
    BookingManagementComponent,
    BreadcrumbComponent,
    BookingRequestsComponent,
    UpcomingBookingsComponent,
    CurrentlyHostingComponent,
    DeclinedComponent,
    MessagesComponent,
    RestaurantInfoComponent,
    PropertyInfoComponent,
    RrpComponent,
    EstablismentReviewsComponent,
    ResolvedReviewsComponent,
    AllReviewsComponent,
    AllMessagesComponent,
    InfluencerMessagesComponent,
    TaskComponent,
    PostRequestsComponent,
    ApprovedPostsComponent,
    PostCreatorsComponent,
    InviteInfluencerComponent,
    ResourcesComponent,
    DepartmentsComponent,
    DepartmentDetailsComponent,
    TaskDetailsComponent,
    SupportTicketDetailsComponent,
    UserImagePreviewComponent,
    InviteDetailsComponent,
    IndividualPricingsComponent,
    WholePricingsComponent
  ],
  imports: [
    CommonModule,
    EstablishmentInfoRoutingModule,
    MenuModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
    NgSelectModule,
    NgbModule,
    FullCalendarModule,
    NgxDropzoneModule,
    NgxDaterangepickerMd.forRoot(),
    NgApexchartsModule

  ]
})
export class EstablishmentInfoModule { }
