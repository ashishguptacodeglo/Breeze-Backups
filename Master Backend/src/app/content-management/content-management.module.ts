import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms'; 
import { NgxEditorModule } from "ngx-editor";
import { MenuModule } from 'src/app/menu/menu.module';
import { BreadcrumbModuleModule  } from 'src/app/breadcrumb-module/breadcrumb-module.module';

import { ContentManagementRoutingModule } from './content-management-routing.module';
import { ContentManagementComponent } from './content-management.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';


@NgModule({
  declarations: [
    ContentManagementComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,

  ],
  imports: [
    CommonModule,
    ContentManagementRoutingModule,
    MenuModule,
    BreadcrumbModuleModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule
  ]
})
export class ContentManagementModule { }
