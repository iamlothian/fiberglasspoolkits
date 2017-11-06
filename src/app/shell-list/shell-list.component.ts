import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import {NgForm} from '@angular/forms';

import { ShellRange }             from '../models/shell-range'
import { ShellRangeService }  from '../services/range.service'
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

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

  ranges:Array<ShellRange> = []

  shellSearchText:string

  constructor(
    private rangeService: ShellRangeService,
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
    this.ranges = await this.rangeService.get()
  }

  filterShells(f: NgForm) {
    console.log(f.value)
  }

}
