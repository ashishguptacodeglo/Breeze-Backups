import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from "ngx-editor";
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { HostRestaurantRoutingModule } from './host-restaurant-routing.module';
import { HostRestaurantComponent } from './host-restaurant.component';
import { TimingComponent } from './timing/timing.component';
import { RestaurantDescriptionComponent } from './restaurant-description/restaurant-description.component';
import { AgmCoreModule } from '@agm/core';
import { RestaurantPhotosComponent } from './restaurant-photos/restaurant-photos.component';
import { VideoImagesComponent } from './restaurant-photos/video-images/video-images.component';
import { PreviewImageComponent } from './restaurant-photos/video-images/preview-image/preview-image.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MenuPhotosComponent } from './menu-photos/menu-photos.component';
import { RestaurantLocationComponent } from './restaurant-location/restaurant-location.component';
import { RestaurantTableAvailabilityComponent } from './restaurant-table-availability/restaurant-table-availability.component';
import { RestaurantBasicInformationComponent } from './restaurant-basic-information/restaurant-basic-information.component';
import { DishPhotosComponent } from './dish-photos/dish-photos.component';
import { RestaurantAmenitiesComponent } from './restaurant-amenities/restaurant-amenities.component';
import { RestaurantPoliciesComponent } from './restaurant-policies/restaurant-policies.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { RestaurantTableTypeComponent } from './restaurant-table-type/restaurant-table-type.component';

import { MenuModule } from '../menu/menu.module'


@NgModule({
  declarations: [
    HostRestaurantComponent,
    TimingComponent,
    RestaurantDescriptionComponent,
    RestaurantPhotosComponent,
    VideoImagesComponent,
    PreviewImageComponent,
    MenuPhotosComponent,
    RestaurantLocationComponent,
    RestaurantTableAvailabilityComponent,
    RestaurantBasicInformationComponent,
    DishPhotosComponent,
    RestaurantAmenitiesComponent,
    RestaurantPoliciesComponent,
    ThankyouComponent,
    EditListingComponent,
    RestaurantTableTypeComponent
  ],
  imports: [
    MenuModule,
    HostRestaurantRoutingModule,
    ReactiveFormsModule,
    NgxEditorModule,
    NgSelectModule,
    FormsModule,
    CommonModule,
     NgxDropzoneModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCaKbVhcX_22R_pRKDYuNA7vox-PtGaDkI',
      libraries: ['places']

    })    
  ]
})
export class HostRestaurantModule { }
