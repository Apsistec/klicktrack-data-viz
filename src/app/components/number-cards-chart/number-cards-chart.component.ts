import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';

@Component({
  selector: 'app-number-cards-chart',
  templateUrl: './number-cards-chart.component.html',
  styleUrls: ['./number-cards-chart.component.scss'],
})
export class NumberCardsChartComponent implements OnInit {
  single!: any[];
  view: any = [700, 400];

  colorScheme: any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };
  cardColor = '#232837';

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event: any) {
    console.log(event);
  }
  ngOnInit(): void {}
}
