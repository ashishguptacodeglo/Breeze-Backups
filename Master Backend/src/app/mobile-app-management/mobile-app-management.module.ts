import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'src/app/menu/menu.module';
import { BreadcrumbModuleModule  } from 'src/app/breadcrumb-module/breadcrumb-module.module';

import { MobileAppManagementRoutingModule } from './mobile-app-management-routing.module';
import { MobileAppManagementComponent } from './mobile-app-management.component';
import { OverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';
import { NewUsersComponent } from './new-users/new-users.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { NgSelectModule } from '@ng-select/ng-select';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    MobileAppManagementComponent,
    OverviewComponent,
    DetailsComponent,
    NewUsersComponent
  ],
  imports: [
    CommonModule,
    MobileAppManagementRoutingModule,
    MenuModule,
    BreadcrumbModuleModule,
    NgApexchartsModule,
    NgSelectModule,
    DataTablesModule
  ]
})
export class MobileAppManagementModule { }
