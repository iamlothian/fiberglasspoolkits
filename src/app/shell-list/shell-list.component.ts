import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { ShellRange }             from '../models/shell-range'
import { ShellRangeService }  from '../services/range.service'

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

  constructor(
    private rangeService: ShellRangeService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.ranges = await this.rangeService.get()
  }


}
