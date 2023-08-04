import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstablishmentUpdateRoutingModule } from './establishment-update-routing.module';
import { EstablishmentUpdateComponent } from './establishment-update.component';
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
import { EstAsPropertyComponent } from './est-details/basic-details/est-as-property/est-as-property.component';
import { EstAsRestaurantComponent } from './est-details/basic-details/est-as-restaurant/est-as-restaurant.component';
import { EstPhotosComponent } from './est-details/est-photos/est-photos.component';
import { EstCatgoryListComponent } from './est-details/est-photos/est-catgory-list/est-catgory-list.component';
import { EstCatgoryImagesComponent } from './est-details/est-photos/est-catgory-images/est-catgory-images.component';


@NgModule({
  declarations: [
    EstablishmentUpdateComponent,
    EstDetailsComponent,
    BasicDetailsComponent,
    EstAsPropertyComponent,
    EstAsRestaurantComponent,
    EstPhotosComponent,
    EstCatgoryListComponent,
    EstCatgoryImagesComponent,
  ],
  imports: [
    CommonModule,
    EstablishmentUpdateRoutingModule,
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
export class EstablishmentUpdateModule { }
