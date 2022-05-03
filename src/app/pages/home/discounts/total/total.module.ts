import { SharedModule } from 'src/app/components/shared.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TotalPageRoutingModule } from './total-routing.module';
import { TotalPage } from './total.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TotalPageRoutingModule,
  ],
  declarations: [TotalPage],
})
export class TotalPageModule {}
