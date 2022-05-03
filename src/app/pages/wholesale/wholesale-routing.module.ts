import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WholesalePage } from './wholesale.page';

const routes: Routes = [
  {
    path: '',
    component: WholesalePage
  },
  {
    path: 'summary',
    loadChildren: () => import('./summary/summary.module').then( m => m.SummaryPageModule)
  },
  {
    path: 'total',
    loadChildren: () => import('./total/total.module').then( m => m.TotalPageModule)
  },
  {
    path: 'by-day-and-time',
    loadChildren: () => import('./by-day-and-time/by-day-and-time.module').then( m => m.ByDayAndTimePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WholesalePageRoutingModule {}
