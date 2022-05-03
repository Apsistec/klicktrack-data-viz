import { ActivatedRoute, NavigationEnd, Router, UrlSegment } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { filter, map } from 'rxjs/operators';

interface Category {
  name: string;
  url?: string;
  children?: Category[];
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  categories: Category[] = [
    {
      name: 'Sales',
      children: [
        { name: 'Sales Summary', url: 'sales/summary' },
        { name: 'Budtender', url: 'sales/budtender' },
        { name: 'Brands', url: 'sales/brands' },
        { name: 'Suppliers', url: 'sales/suppliers' },
        { name: 'By Day and Time', url: '/sales/by-day-and-time' },
      ],
    },
    {
      name: 'Discounts',

      children: [
        {
          name: 'Discount Summary ',
          url: '/discounts/summary',
        },
        {
          name: 'Total ',
          url: '/discounts/total',
        },
        {
          name: 'By Day and Time',
          url: '/discounts/by-day-and-time',
        },
      ],
    },
    {
      name: 'Inventory',

      children: [
        {
          name: 'Inventory Summary ',
          url: '/inventory/summary',
        },
        {
          name: 'Total ',
          url: '/inventory/total',
        },
        {
          name: 'By Day and Time',
          url: '/inventory/by-day-and-time',
        },
      ],
    },
    {
      name: 'Wholesale',

      children: [
        {
          name: 'Summary ',
          url: '/wholesale/summary',
        },
        {
          name: 'Total ',
          url: '/wholesale/total',
        },
        {
          name: 'By Day and Time',
          url: '/wholesale/by-day-and-time',
        },
      ],
    },
  ];

  currentRoute!: ActivatedRoute;
  urlPath!: UrlSegment[];
  path = [];

  constructor(public router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentRoute = this.activatedRoute.root;
          this.activatedRoute.url.pipe(map(path => {
          this.urlPath = path;

        }));
      });
  }
}
