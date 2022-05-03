import { SharedModule } from 'src/app/components/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ByDayAndTimePageRoutingModule } from './by-day-and-time-routing.module';
import { ByDayAndTimePage } from './by-day-and-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ByDayAndTimePageRoutingModule,
    SharedModule
  ],
  declarations: [ByDayAndTimePage]
})
export class ByDayAndTimePageModule {}
