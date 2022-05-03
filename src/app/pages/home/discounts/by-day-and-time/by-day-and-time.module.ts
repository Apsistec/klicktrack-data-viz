import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../components/shared.module';
import { ByDayAndTimePageRoutingModule } from './by-day-and-time-routing.module';
import { ByDayAndTimePage } from './by-day-and-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    ByDayAndTimePageRoutingModule
  ],
  declarations: [ByDayAndTimePage]
})
export class ByDayAndTimePageModule {}
