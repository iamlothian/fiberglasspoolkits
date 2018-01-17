import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { ShellRange, Entity, Shell }      from '../models'
import { ShellListFilterService }         from '../services/shell-list-filter.service'
import { NgxCarousel, NgxCarouselStore }  from 'ngx-carousel';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
//import { debug } from 'util';

@Component({
  selector: 'fpk-shell-list',
  templateUrl: './shell-list.component.html',
  styleUrls: ['./shell-list.component.css'],
  providers: [NgxCarousel],
  animations: [
    trigger('fadeInOut', [
      state('in', style({opacity: 1})),
      transition('void => *', [ style({opacity: 0}), animate(100) ]),
      transition('* => void', [ animate(100, style({opacity: 0})) ])
    ])
  ]
})
export class ShellListComponent implements OnInit {

  currentRange:number = 0

  constructor(
    public rangeService: ShellListFilterService,
    private router: Router,
    public shellTileConfig: NgxCarousel
  ) {
    this.shellTileConfig = {
      grid: {xs: 1, sm: 2, md: 3, lg: 3, all: 0},
      slide: 1,
      speed: 400,
      point: {
        visible: true
      },
      touch: true,
      loop: false
    }
  }

  async ngOnInit() {
    //this.rangeService.filteredRanges;
  }

  trackByFn(index, item: ShellRange) {
    return item['id'] || item.title; // or item.id
  }

}
