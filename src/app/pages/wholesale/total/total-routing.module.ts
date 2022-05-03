import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TotalPage } from './total.page';

const routes: Routes = [
  {
    path: '',
    component: TotalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalPageRoutingModule {}
