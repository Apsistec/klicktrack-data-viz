import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ByDayAndTimePageRoutingModule } from './by-day-and-time-routing.module';

import { ByDayAndTimePage } from './by-day-and-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ByDayAndTimePageRoutingModule
  ],
  declarations: [ByDayAndTimePage]
})
export class ByDayAndTimePageModule {}
