import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudtenderSalesPageRoutingModule } from './budtender-sales-routing.module';

import { BudtenderSalesPage } from './budtender-sales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudtenderSalesPageRoutingModule
  ],
  declarations: [BudtenderSalesPage]
})
export class BudtenderSalesPageModule {}
