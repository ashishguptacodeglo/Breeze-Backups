import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostRestaurantComponent } from './host-restaurant.component';
import { TimingComponent } from './timing/timing.component';
import { RestaurantDescriptionComponent } from './restaurant-description/restaurant-description.component';
import { RestaurantLocationComponent } from './restaurant-location/restaurant-location.component';
import { RestaurantPhotosComponent } from './restaurant-photos/restaurant-photos.component';
import { MenuPhotosComponent } from './menu-photos/menu-photos.component';
import { RestaurantTableAvailabilityComponent } from './restaurant-table-availability/restaurant-table-availability.component';
import { RestaurantBasicInformationComponent } from './restaurant-basic-information/restaurant-basic-information.component';
import { DishPhotosComponent } from './dish-photos/dish-photos.component';
import { RestaurantAmenitiesComponent } from './restaurant-amenities/restaurant-amenities.component';
import { RestaurantPoliciesComponent } from './restaurant-policies/restaurant-policies.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { RestaurantTableTypeComponent } from './restaurant-table-type/restaurant-table-type.component';


const routes: Routes = [
  { path: '', component: RestaurantBasicInformationComponent },
  { path: 'restaurant-basic-information', component: RestaurantBasicInformationComponent },
  { path: 'restaurant-timing', component: TimingComponent },
  { path: 'restaurant-description', component: RestaurantDescriptionComponent },
  { path: 'table-type', component: RestaurantTableTypeComponent },
  { path: 'restaurant-location', component: RestaurantLocationComponent },
  { path: 'restaurant-amenities', component: RestaurantAmenitiesComponent },
  { path: 'restaurant-table-availability', component: RestaurantTableAvailabilityComponent },
  { path: 'restaurant-photos', component: RestaurantPhotosComponent },
  { path: 'menu-photos', component: MenuPhotosComponent },
  { path: 'dish-photos', component: DishPhotosComponent },
  { path: 'restaurant-policies', component: RestaurantPoliciesComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: 'edit-listing', component: EditListingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostRestaurantRoutingModule { }
