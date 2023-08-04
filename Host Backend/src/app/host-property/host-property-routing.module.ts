import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AboutPropertyComponent } from './about-property/about-property.component';
import { PropertyPhotosComponent } from './property-photos/property-photos.component';
import { ListingComponent } from './listing/listing.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { PropertyRoomTypeComponent } from './property-room-type/property-room-type.component';
import { RoomServiceAvailabilityComponent } from './room-service-availability/room-service-availability.component';
import { HostEntirePropertyComponent } from './host-entire-property/host-entire-property.component';
import { ProfileComponent } from './profile/profile.component';
import { PropertyHouseRuleComponent } from './property-house-rule/property-house-rule.component';



const routes: Routes = [
  { path: '', component: HostPropertyComponent },
  { path: 'describe-property', component: DescribePropertyComponent },
  { path: 'place-type', component: PlaceTypeComponent },
  { path: 'room-type', component: PropertyRoomTypeComponent },  
  { path: 'host-entire-property', component: HostEntirePropertyComponent },
  { path: 'room-service-availability', component: RoomServiceAvailabilityComponent },
  // { path: 'guest-stay-duration', component: GuestStayDurationComponent },  
  { path: 'property-timings', component: PropertyTimingsComponent },  
  { path: 'property-description', component: AboutPropertyComponent },
  { path: 'property-location', component: PropertyLocationComponent },  
  // { path: 'property-basic-info', component: PropertyBasicInfoComponent },
  { path: 'property-amenities', component: PropertyAmenitiesComponent },  
  { path: 'property-photos', component: PropertyPhotosComponent },
  { path: 'property-policies', component: PropertyPoliciesComponent },
  { path: 'property-access-permission', component: PropertyAccessPermissionComponent },
  { path: 'room-safety-hygiene', component: RoomSafetyHygieneComponent },
  { path: 'house-rule', component: PropertyHouseRuleComponent },
  { path: 'thankyou', component: ThankyouComponent },

  // { path: 'types-of-bed', component: TypesOfBedsComponent },
  { path: 'listing', component: ListingComponent },
  { path: 'edit-listing', component: EditListingComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostPropertyRoutingModule { }
