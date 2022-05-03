import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiscountsPage } from './discounts.page';

const routes: Routes = [
  {
    path: '',
    component: DiscountsPage
  },
  {
    path: 'total',
    loadChildren: () => import('./total/total.module').then( m => m.TotalPageModule)
  },
  {
    path: 'by-day-and-time',
    loadChildren: () => import('./by-day-and-time/by-day-and-time.module').then( m => m.ByDayAndTimePageModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./summary/summary.module').then( m => m.SummaryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscountsPageRoutingModule {}
