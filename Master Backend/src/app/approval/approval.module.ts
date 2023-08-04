import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovalRoutingModule } from './approval-routing.module';
import { ApprovalComponent } from './approval.component';
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

import { EstDetailsComponent } from './est-details/est-details.component';
import { BasicDetailsComponent } from './est-details/basic-details/basic-details.component';
import { EstPhotosComponent } from './est-details/est-photos/est-photos.component';
import { ApprovalHistoryComponent } from './est-details/approval-history/approval-history.component';
import { EstAsPropertyComponent } from './est-details/basic-details/est-as-property/est-as-property.component';
import { EstAsRestaurantComponent } from './est-details/basic-details/est-as-restaurant/est-as-restaurant.component';
import { ApprovalDetailsComponent } from './est-details/approval-history/approval-details/approval-details.component';
import { ApprovalDocumentsComponent } from './est-details/approval-history/approval-documents/approval-documents.component';
import { EstCatgoryImagesComponent } from './est-details/est-photos/est-catgory-images/est-catgory-images.component';
import { EstCatgoryListComponent } from './est-details/est-photos/est-catgory-list/est-catgory-list.component';



@NgModule({
  declarations: [
    ApprovalComponent,
    EstDetailsComponent,
    BasicDetailsComponent,
    EstPhotosComponent,
    ApprovalHistoryComponent,
    EstAsPropertyComponent,
    EstAsRestaurantComponent,
    ApprovalDetailsComponent,
    ApprovalDocumentsComponent,
    EstCatgoryImagesComponent,
    EstCatgoryListComponent,
  ],
  imports: [
      CommonModule,
      ApprovalRoutingModule,
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
export class ApprovalModule { }
