import { SharedModule } from 'src/app/components/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BudtenderSalesPageRoutingModule } from './budtender-sales-routing.module';
import { BudtenderSalesPage } from './budtender-sales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    BudtenderSalesPageRoutingModule
  ],
  declarations: [BudtenderSalesPage]
})
export class BudtenderSalesPageModule {}
