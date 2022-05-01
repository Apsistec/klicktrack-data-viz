import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';

import { filter, map } from 'rxjs/operators';

interface Category {
  name: string;
  url: string;
  children?: Category[];
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  url: string;
  level: number;
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
      url: '/sales',
      children: [
        { name: 'Summary', url: 'sales/summary' },
        { name: 'Budtender', url: 'sales/budtender' },
        { name: 'Brands', url: 'sales/brands' },
        { name: 'Suppliers', url: 'sales/suppliers' },
        { name: 'By Day and Time', url: '/sales/by-day-and-time' },
      ],
    },
    {
      name: 'Discounts',
      url: '/discounts',
      children: [
        {
          name: 'Summary ',
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
      url: '/inventory',
      children: [
        {
          name: 'Summary ',
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
      url: '/wholesale',
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

  currentRoute;
  urlPath;
  path = [];

  constructor(public router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentRoute = this.activatedRoute.root;
          this.activatedRoute.url.pipe(map(path => {
          this.urlPath = path;
          this.path = this.urlPath.split('/');
        }));
      });
  }
}
