import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';

@Component({
  selector: 'app-stacked-vertical-bar-chart',
  templateUrl: './stacked-vertical-bar-chart.component.html',
  styleUrls: ['./stacked-vertical-bar-chart.component.scss'],
})
export class StackedVerticalBarChartComponent implements OnInit {
  multi!: any[];
  view: any = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  animations = true;

  colorScheme: any = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA'],
  };

  constructor() {
    Object.assign(this, { multi });
  }

  onSelect(event: any) {
    console.log(event);
  }
  ngOnInit(): void {}
}
