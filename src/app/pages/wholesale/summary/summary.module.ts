import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/components/shared.module';

import { SummaryPageRoutingModule } from './summary-routing.module';
import { SummaryPage } from './summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SummaryPageRoutingModule,
  ],
  declarations: [SummaryPage],
})
export class SummaryPageModule {}
