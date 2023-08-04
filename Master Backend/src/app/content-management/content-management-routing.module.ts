import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentManagementComponent } from './content-management.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
    { path: '', component: PrivacyPolicyComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'terms-and-conditions', component: TermsAndConditionsComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentManagementRoutingModule { }
