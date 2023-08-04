import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EstablishmentsComponent } from './establishments/establishments.component';


import { MenuModule } from 'src/app/menu/menu.module';
import { BreadcrumbModuleModule  } from 'src/app/breadcrumb-module/breadcrumb-module.module';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule , ReactiveFormsModule} from '@angular/forms'; 
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgApexchartsModule } from "ng-apexcharts";
import { ProfileListComponent } from './user-profile/profile-list/profile-list.component';
import { ProfileDetailsComponent } from './user-profile/profile-details/profile-details.component';
import { UserDetailsComponent } from './user-profile/user-details/user-details.component';
import { EstListComponent } from './establishments/est-list/est-list.component';
import { EstDetailsComponent } from './establishments/est-details/est-details.component';
import { BasicDetailsComponent } from './establishments/est-details/basic-details/basic-details.component';
import { EstAsPropertyComponent } from './establishments/est-details/basic-details/est-as-property/est-as-property.component';
import { EstAsRestaurantComponent } from './establishments/est-details/basic-details/est-as-restaurant/est-as-restaurant.component';
import { EstPhotosComponent } from './establishments/est-details/est-photos/est-photos.component';
import { EstCatgoryImagesComponent } from './establishments/est-details/est-photos/est-catgory-images/est-catgory-images.component';
import { EstCatgoryListComponent } from './establishments/est-details/est-photos/est-catgory-list/est-catgory-list.component';
import { ReportDetailsComponent } from './establishments/report-details/report-details.component';

@NgModule({
  declarations: [
    ReportComponent,
    UserProfileComponent,
    EstablishmentsComponent,
    ProfileListComponent,
    ProfileDetailsComponent,
    UserDetailsComponent,
    EstListComponent,
    EstDetailsComponent,
    BasicDetailsComponent,
    EstAsPropertyComponent,
    EstAsRestaurantComponent,
    EstPhotosComponent,
    EstCatgoryImagesComponent,
    EstCatgoryListComponent,
    ReportDetailsComponent,
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    MenuModule,
    BreadcrumbModuleModule,
    NgxDaterangepickerMd.forRoot(),
      FormsModule,
      NgSelectModule,
      NgbModule,
      DataTablesModule,
      FullCalendarModule,
      NgxDropzoneModule,
      NgApexchartsModule,
      ReactiveFormsModule
  ]
})
export class ReportModule { }
