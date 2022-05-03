import { SharedModule } from 'src/app/components/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SalesSummaryPageRoutingModule } from './sales-summary-routing.module';
import { SalesSummaryPage } from './sales-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SalesSummaryPageRoutingModule
  ],
  declarations: [SalesSummaryPage]
})
export class SalesSummaryPageModule {}
