import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';

@Component({
  selector: 'app-grouped-horizontal-bar-chart',
  templateUrl: './grouped-horizontal-bar-chart.component.html',
  styleUrls: ['./grouped-horizontal-bar-chart.component.scss'],
})
export class GroupedHorizontalBarChartComponent implements OnInit {
  multi!: any[];
  view: any = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendPosition: any = 'below';
  showXAxisLabel = true;
  yAxisLabel = 'Country';
  showYAxisLabel = true;
  xAxisLabel = 'Population';

  colorScheme: any = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA'],
  };
  schemeType: any = 'linear';

  constructor() {
    Object.assign(this, { multi });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  ngOnInit(): void {}
}
