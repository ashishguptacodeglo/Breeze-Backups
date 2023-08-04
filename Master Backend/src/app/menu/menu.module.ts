import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenusComponent } from '../navigations/menus/menus.component';
import { SideBarComponent } from '../navigations/side-bar/side-bar.component';

import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [MenusComponent, SideBarComponent],
  exports: [MenusComponent, SideBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MenuModule { }
