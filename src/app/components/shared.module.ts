import { TableComponent } from './table/table.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { GuageComponent } from './guage/guage.component';
import { LineBarChartComponent } from './line-bar-chart/line-bar-chart.component';
import { BarChartVerticalComponent } from './bar-chart-vertical/bar-chart-vertical.component';
import { BarChartHorizontalComponent } from './bar-chart-horizontal/bar-chart-horizontal.component';
import { LinesChartComponent } from './lines-chart/lines-chart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    BarChartHorizontalComponent,
    BarChartVerticalComponent,
    LineBarChartComponent,
    LinesChartComponent,
    GuageComponent,
    PieChartComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    BarChartHorizontalComponent,
    BarChartVerticalComponent,
    LineBarChartComponent,
    LinesChartComponent,
    GuageComponent,
    PieChartComponent,
    TableComponent,
  ],
})
export class SharedModule {}
