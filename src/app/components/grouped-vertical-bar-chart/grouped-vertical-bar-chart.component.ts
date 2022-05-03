import { Component, OnInit, NgModule } from '@angular/core';
import { multi } from './data';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-grouped-vertical-bar-chart',
  templateUrl: './grouped-vertical-bar-chart.component.html',
  styleUrls: ['./grouped-vertical-bar-chart.component.scss'],
})
export class GroupedVerticalBarChartComponent implements OnInit {
  multi!: any[];
  view: any = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  legendTitle = 'Years';

  colorScheme: any = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA'],
  };

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
