import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackendUsersRoutingModule } from './backend-users-routing.module';
import { BackendUsersComponent } from './backend-users.component';

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


@NgModule({
  declarations: [
    BackendUsersComponent
  ],
  imports: [
    CommonModule,
    BackendUsersRoutingModule,
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
export class BackendUsersModule { }
