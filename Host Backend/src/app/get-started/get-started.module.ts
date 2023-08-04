import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEditorModule } from "ngx-editor";
import { FormsModule , ReactiveFormsModule} from '@angular/forms'; 
import { NgSelectModule } from '@ng-select/ng-select';



import { GetStartedRoutingModule } from './get-started-routing.module';
import { GetStartedComponent } from './get-started.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';

import { TutorialComponent } from './tutorial/tutorial.component';

import { MenuModule } from '../menu/menu.module'



@NgModule({
  declarations: [
    GetStartedComponent,
    LandingPageComponent,
    PersonalInformationComponent,
    TutorialComponent
  ],
  imports: [
    ReactiveFormsModule,
    NgxEditorModule,
    NgSelectModule,
    FormsModule,
    CommonModule,
    MenuModule,
    GetStartedRoutingModule
  ],
})
export class GetStartedModule { }
