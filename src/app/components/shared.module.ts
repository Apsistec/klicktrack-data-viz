import { GroupedVerticalBarChartComponent } from './grouped-vertical-bar-chart/grouped-vertical-bar-chart.component';
import { StackedVerticalBarChartComponent } from './stacked-vertical-bar-chart/stacked-vertical-bar-chart.component';
import { NormalizedAreaChartComponent } from './normalized-area-chart/normalized-area-chart.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { GroupedHorizontalBarChartComponent } from './grouped-horizontal-bar-chart/grouped-horizontal-bar-chart.component';
import { HeatMapChartComponent } from './heat-map-chart/heat-map-chart.component';
import { NumberCardsChartComponent } from './number-cards-chart/number-cards-chart.component';
import { PieChartGridComponent } from './pie-chart-grid/pie-chart-grid.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
// import { PieChartComponent } from './pie-chart/pie-chart.component';
import { GuageComponent } from './guage/guage.component';
import { LineBarChartComponent } from './line-bar-chart/line-bar-chart.component';
import { BarChartVerticalComponent } from './bar-chart-vertical/bar-chart-vertical.component';

import { LinesChartComponent } from './lines-chart/lines-chart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { IonicModule } from '@ionic/angular';
import { AdvancedPieChartComponent } from './advanced-pie-chart/advanced-pie-chart.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
// import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    BarChartVerticalComponent,
    LineBarChartComponent,
    LinesChartComponent,
    GuageComponent,
    PieChartGridComponent,
    NumberCardsChartComponent,
    HeatMapChartComponent,
    GroupedHorizontalBarChartComponent,
    BubbleChartComponent,
    AreaChartComponent,
    NormalizedAreaChartComponent,
    StackedVerticalBarChartComponent,
    NormalizedAreaChartComponent,
    GroupedVerticalBarChartComponent,
    StackedVerticalBarChartComponent,
    AdvancedPieChartComponent,
    LinesChartComponent,
    TableComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    NgxChartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
  ],
  exports: [
    BarChartVerticalComponent,
    BubbleChartComponent,
    LineBarChartComponent,
    LinesChartComponent,
    GuageComponent,
    PieChartGridComponent,
    NumberCardsChartComponent,
    HeatMapChartComponent,
    GroupedHorizontalBarChartComponent,
    BubbleChartComponent,
    AreaChartComponent,
    NormalizedAreaChartComponent,
    StackedVerticalBarChartComponent,
    NormalizedAreaChartComponent,
    GroupedVerticalBarChartComponent,
    StackedVerticalBarChartComponent,
    AdvancedPieChartComponent,
    LinesChartComponent,
    TableComponent,
    DashboardComponent,
    TableComponent,
  ],
})
export class SharedModule {}
