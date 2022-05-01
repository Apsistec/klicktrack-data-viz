import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WholesalePageRoutingModule } from './wholesale-routing.module';

import { WholesalePage } from './wholesale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WholesalePageRoutingModule
  ],
  declarations: [WholesalePage]
})
export class WholesalePageModule {}
