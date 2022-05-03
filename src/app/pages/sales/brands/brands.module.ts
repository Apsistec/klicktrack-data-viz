import { SharedModule } from 'src/app/components/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BrandsPageRoutingModule } from './brands-routing.module';
import { BrandsPage } from './brands.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrandsPageRoutingModule,
    SharedModule,
  ],
  declarations: [BrandsPage]
})
export class BrandsPageModule {}
