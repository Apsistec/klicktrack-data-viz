import { Component, OnInit } from '@angular/core';
import { multi } from './data';

@Component({
  selector: 'app-heat-map-chart',
  templateUrl: './heat-map-chart.component.html',
  styleUrls: ['./heat-map-chart.component.scss'],
})
export class HeatMapChartComponent implements OnInit {
  multi!: any[];
  view: any = [700, 300];

  // options
  legend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  yAxisLabel = 'Year';

  colorScheme: any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
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

  ngOnInit() {}
}
