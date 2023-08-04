import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationSettingsRoutingModule } from './notification-settings-routing.module';
import { NotificationSettingsComponent } from './notification-settings.component';
import { MenuModule } from '../menu/menu.module'

@NgModule({
  declarations: [
    NotificationSettingsComponent
  ],
  imports: [
    CommonModule,
    NotificationSettingsRoutingModule,
    MenuModule
  ]
})
export class NotificationSettingsModule { }
