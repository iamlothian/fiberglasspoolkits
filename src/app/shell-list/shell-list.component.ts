import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import {NgForm} from '@angular/forms';

import { ShellRange, Entity, Shell }             from '../models'
import { ShellRangeService }              from '../services/range.service'
import { NgxCarousel, NgxCarouselStore }  from 'ngx-carousel';

import { NouiFormatter } from 'ng2-nouislider'

export class unitsFormatter implements NouiFormatter {
  to(value: number): string {
    return (value / 1000).toFixed(1) + 'm'
  }

  from(value: string): number {
    return Number.parseFloat(value.replace('m','')) * 1000
  }
}


import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { debug } from 'util';

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

  allRanges:Array<ShellRange> = []
  filteredRanges:Array<ShellRange> = []

  maxLength:number = 0
  minLength:number = Number.MAX_SAFE_INTEGER
  lengthRange = [0,Number.MAX_SAFE_INTEGER]

  maxWidth:number = 0
  minWidth:number = Number.MAX_SAFE_INTEGER
  widthRange = [0,Number.MAX_SAFE_INTEGER]

  maxDepth:number = 0
  minDepth:number = Number.MAX_SAFE_INTEGER
  depthRange = [0,Number.MAX_SAFE_INTEGER]

  maxCost:number = 0
  minCost:number = Number.MAX_SAFE_INTEGER
  costRange = [0,Number.MAX_SAFE_INTEGER]

  shellSearchText:string

  suppliers:Array<Entity> = []
  supplier:Entity = undefined
  selectSupplier(supplier:Entity) {
    this.supplier = supplier
  }

  rangeConfig: any = {
    behaviour: 'drag',
    connect: true,
    step: 100,
    range: { min: 0, max: Number.MAX_SAFE_INTEGER},
    // pageSteps: 100,  // number of page steps, defaults to 10
    // pips: {
    //   mode: 'count',
    //   density: 2,
    //   values: 6,
    //   stepped: true
    // },
    tooltips: [new unitsFormatter(), new unitsFormatter()]
  };

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
    this.allRanges = await this.rangeService.get()
    this.filteredRanges = this.allRanges

    this.allRanges.forEach(r => {
      // collect all suppliers from list
      if(this.suppliers.findIndex(s => s.entityId === r.supplier.entityId) < 0) { this.suppliers.push(r.supplier) }

      let maxShellLength = r.shells.reduce((m,s) => m >= s.length ? m : s.length, 0)
      if(this.maxLength < maxShellLength) { this.maxLength = maxShellLength }

      let minShellLength = r.shells.reduce((m,s) => m >= s.length ? s.length : m,  Number.MAX_SAFE_INTEGER)
      if(this.minLength > minShellLength) { this.minLength = minShellLength }

      let maxShellWidth = r.shells.reduce((m,s) => m >= s.width ? m : s.width, 0)
      if(this.maxWidth < maxShellWidth) { this.maxWidth = maxShellWidth }

      let minShellWidth = r.shells.reduce((m,s) => m >= s.width ? s.width : m, Number.MAX_SAFE_INTEGER)
      if(this.minWidth > minShellWidth) { this.minWidth = minShellWidth }

      let maxShellDepth = r.shells.reduce((m,s) => m >= (s.depthMax || s.depthMin) ? m : (s.depthMax || s.depthMin), 0)
      if(this.maxDepth < maxShellDepth) { this.maxDepth = maxShellDepth }

      let minShellDepth = r.shells.reduce((m,s) => m >= s.depthMin ? s.depthMin : m, Number.MAX_SAFE_INTEGER)
      if(this.minDepth > minShellDepth) { this.minDepth = minShellDepth }

    })

  }

  filterShells(f: NgForm) {
    debugger
    this.filteredRanges = this.allRanges
      .filter(r => !!this.shellSearchText ? r.title.toLowerCase().indexOf(this.shellSearchText) !== -1 : r)
      .filter(r => !!this.supplier ? r.supplier.entityId === this.supplier.entityId : r)
      //.map(r => { r.shells = r.shells.filter((s,i)=>i===0); return r });

    this.currentRange = -1
  }

}
