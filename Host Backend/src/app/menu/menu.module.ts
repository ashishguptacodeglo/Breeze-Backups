import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenusComponent } from '../navigations/menus/menus.component';
import { StepsComponent } from '../navigations/steps/steps.component';
import { SideBarComponent } from '../navigations/side-bar/side-bar.component';

import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [MenusComponent, StepsComponent, SideBarComponent],
  exports: [MenusComponent, StepsComponent, SideBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MenuModule { }
