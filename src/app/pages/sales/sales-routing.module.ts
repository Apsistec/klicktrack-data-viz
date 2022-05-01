import { BudtenderSalesPage } from './budtender-sales/budtender-sales.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesPage } from './sales.page';

const routes: Routes = [
  {
    path: '',
    component: SalesPage
  },
  {
    path: 'summary',
    loadChildren: () => import('./sales-summary/sales-summary.module').then( m => m.SalesSummaryPageModule)
  },
  {
    path: 'BudtenderSalesPage                                                                                     ',
    loadChildren: () => import('./budtender-sales/budtender-sales.module').then( m => m.BudtenderSalesPageModule)
  },
  {
    path: 'suppliers',
    loadChildren: () => import('./suppliers/suppliers.module').then( m => m.SuppliersPageModule)
  },
  {
    path: 'by-day-and-time',
    loadChildren: () => import('./by-day-and-time/by-day-and-time.module').then( m => m.ByDayAndTimePageModule)
  },
  {
    path: 'brands',
    loadChildren: () => import('./brands/brands.module').then( m => m.BrandsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesPageRoutingModule {}
