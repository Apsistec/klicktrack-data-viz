import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../components/shared.module';
import { DiscountsPageRoutingModule } from './discounts-routing.module';
import { DiscountsPage } from './discounts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    DiscountsPageRoutingModule
  ],
  declarations: [DiscountsPage]
})
export class DiscountsPageModule {}
