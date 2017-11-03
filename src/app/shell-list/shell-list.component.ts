import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { ShellRange }             from '../models/shell-range'
import { ShellRangeService }  from '../services/range.service'

@Component({
  selector: 'fpk-shell-list',
  templateUrl: './shell-list.component.html',
  styleUrls: ['./shell-list.component.css']
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
