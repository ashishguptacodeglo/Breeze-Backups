import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { EstablishmentListComponent } from './establishment-list/establishment-list.component';
 // import { GetStartedModule } from '../get-started/get-started.module'

 import { MenuModule } from '../menu/menu.module'

@NgModule({
  declarations: [
    HomeComponent,
    EstablishmentListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MenuModule
    // GetStartedModule
  ]
})
export class HomeModule { }
