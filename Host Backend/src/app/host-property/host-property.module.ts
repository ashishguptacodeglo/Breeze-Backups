import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEditorModule } from "ngx-editor";

import { HostPropertyRoutingModule } from './host-property-routing.module';
import { HostPropertyComponent } from './host-property.component';
import { DescribePropertyComponent } from './describe-property/describe-property.component';
import { PlaceTypeComponent } from './place-type/place-type.component';
import { GuestStayDurationComponent } from './guest-stay-duration/guest-stay-duration.component';
import { PropertyAmenitiesComponent } from './property-amenities/property-amenities.component';
import { PropertyAccessPermissionComponent } from './property-access-permission/property-access-permission.component';
import { RoomSafetyHygieneComponent } from './room-safety-hygiene/room-safety-hygiene.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { PropertyPoliciesComponent } from './property-policies/property-policies.component';
import { TypesOfBedsComponent } from './types-of-beds/types-of-beds.component';
import { PropertyLocationComponent } from './property-location/property-location.component';
import { PropertyBasicInfoComponent } from './property-basic-info/property-basic-info.component';
import { PropertyTimingsComponent } from './property-timings/property-timings.component';
 import { AgmCoreModule } from '@agm/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms'; 

 import { NgSelectModule } from '@ng-select/ng-select';
import { AboutPropertyComponent } from './about-property/about-property.component';
import { PropertyPhotosComponent } from './property-photos/property-photos.component';
import { VideoImagesComponent } from './property-photos/video-images/video-images.component';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { PreviewImageComponent } from './property-photos/video-images/preview-image/preview-image.component';
import { ListingComponent } from './listing/listing.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { PropertyRoomTypeComponent } from './property-room-type/property-room-type.component';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { RoomServiceAvailabilityComponent } from './room-service-availability/room-service-availability.component';
import { HostEntirePropertyComponent } from './host-entire-property/host-entire-property.component';
import { ProfileComponent } from './profile/profile.component';


import { PropertyHouseRuleComponent } from './property-house-rule/property-house-rule.component'
import { MenuModule } from '../menu/menu.module'



@NgModule({
  declarations: [
    HostPropertyComponent,
    DescribePropertyComponent,
    PlaceTypeComponent,
    GuestStayDurationComponent,
    PropertyAmenitiesComponent,
    PropertyAccessPermissionComponent,
    RoomSafetyHygieneComponent,
    ThankyouComponent,
    PropertyPoliciesComponent,
    TypesOfBedsComponent,
    PropertyLocationComponent,
    PropertyBasicInfoComponent,
    PropertyTimingsComponent,
    AboutPropertyComponent,
    PropertyPhotosComponent,
    VideoImagesComponent,
    PreviewImageComponent,
    ListingComponent,
    EditListingComponent,
    PropertyRoomTypeComponent,
    RoomServiceAvailabilityComponent,
    HostEntirePropertyComponent,
    ProfileComponent, 
    PropertyHouseRuleComponent,
  ],
  imports: [
    MenuModule,
    ReactiveFormsModule,
    NgxEditorModule,
    HostPropertyRoutingModule,
    NgSelectModule,
    FormsModule,
    CommonModule,
    NgxDropzoneModule,
    NgxDaterangepickerMd.forRoot(),
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCaKbVhcX_22R_pRKDYuNA7vox-PtGaDkI',
      libraries: ['places']

    })    
  ],
})
export class HostPropertyModule { }
