import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ByDayAndTimePage } from './by-day-and-time.page';

const routes: Routes = [
  {
    path: '',
    component: ByDayAndTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ByDayAndTimePageRoutingModule {}
