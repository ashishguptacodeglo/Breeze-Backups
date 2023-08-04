import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifyPropertyRoutingModule } from './verify-property-routing.module';
import { VerifyPropertyComponent } from './verify-property.component';
import { UploadDocumentComponent } from './upload-document/upload-document.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

import { MenuModule } from '../menu/menu.module'

@NgModule({
  declarations: [
    VerifyPropertyComponent,
    UploadDocumentComponent,
    ThankyouComponent
  ],
  imports: [
    CommonModule,
    VerifyPropertyRoutingModule,
    MenuModule
  ]
})
export class VerifyPropertyModule { }
