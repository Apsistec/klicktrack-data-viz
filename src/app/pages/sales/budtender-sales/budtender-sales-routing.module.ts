import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudtenderSalesPage } from './budtender-sales.page';

const routes: Routes = [
  {
    path: '',
    component: BudtenderSalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudtenderSalesPageRoutingModule {}
