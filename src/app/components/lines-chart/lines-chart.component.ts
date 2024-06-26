import { ChartLabel } from 'ng2-charts';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartOptions, Color } from 'chart.js';

@Component({
  selector: 'app-lines-chart',
  templateUrl: './lines-chart.component.html',
  styleUrls: ['./lines-chart.component.css'],
})
export class LinesChartComponent implements OnInit{
  public lineChartData: ChartData[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];
  public lineChartOptions: ChartOptions & { annotation: any } = {
    responsive: true,
  };
  // public lineChartColors: Color[] = [

  //     {borderColor: 'black'},
  //     {backgroundColor: 'rgba(255,0,0,0.3)'},

  // ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() {}

  ngOnInit() {}
}
