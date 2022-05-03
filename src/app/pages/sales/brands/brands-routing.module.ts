import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrandsPage } from './brands.page';

const routes: Routes = [
  {
    path: '',
    component: BrandsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandsPageRoutingModule {}
