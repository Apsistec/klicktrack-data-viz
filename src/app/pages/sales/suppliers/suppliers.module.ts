import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/components/shared.module';

import { SuppliersPageRoutingModule } from './suppliers-routing.module';
import { SuppliersPage } from './suppliers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuppliersPageRoutingModule,
    SharedModule,
  ],
  declarations: [SuppliersPage]
})
export class SuppliersPageModule {}
