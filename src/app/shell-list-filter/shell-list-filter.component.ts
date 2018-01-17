import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router }            from '@angular/router';
import { NgForm }            from '@angular/forms';

import { ShellRange, Entity, Shell }  from '../models'
import { ShellRangeService }          from '../services/range.service'
import { ShellListFilterService, RangeMaxMin }     from '../services/shell-list-filter.service'

import { NouiFormatter } from 'ng2-nouislider'

export class moneyFormatter implements NouiFormatter {

  constructor(private currencyPipe: CurrencyPipe){}

  value: number = 0
  to(value: number): string {
    this.value = value;
    return this.currencyPipe.transform(value, 'AUD', 'symbol-narrow', '1.0-0');
  }
  from(value: string): number {
    return this.value
  }
}

export class unitsFormatter implements NouiFormatter {
  to(value: number): string {
    return (value / 1000).toFixed(2) + 'm'
  }
  from(value: string): number {
    return Number.parseFloat(value.replace('m','')) * 1000
  }
}

@Component({
  selector: 'fpk-shell-list-filter',
  templateUrl: './shell-list-filter.component.html',
  styleUrls: ['./shell-list-filter.component.css'],
  providers: [CurrencyPipe]
})
export class ShellListFilterComponent implements OnInit {

  lengthRange:RangeMaxMin = [0,Number.MAX_SAFE_INTEGER]
  widthRange:RangeMaxMin = [0,Number.MAX_SAFE_INTEGER]
  depthRange:RangeMaxMin = [0,Number.MAX_SAFE_INTEGER]
  costRange:RangeMaxMin = [0,Number.MAX_SAFE_INTEGER]
  shellSearchText:string
  supplier:Entity = undefined

  rangeConfig: any = {
    behaviour: 'drag',
    connect: true,
    step: 50,
    range: { min: 0, max: Number.MAX_SAFE_INTEGER},
    // pageSteps: 100,  // number of page steps, defaults to 10
    pips: {
      mode: 'count',
      values: 5,
      density: 4,
      stepped: true,
      format: new unitsFormatter()
    },
    tooltips: false
    //tooltips: [new unitsFormatter(), new unitsFormatter()]
  };

  costRangeConfig: any = {
    behaviour: 'drag',
    connect: true,
    step: 500,
    range: { min: 0, max: Number.MAX_SAFE_INTEGER},
    // pageSteps: 100,  // number of page steps, defaults to 10
    pips: {
      mode: 'count',
      values: 5,
      density: 4,
      stepped: true,
      format: new moneyFormatter(this.currencyPipe)
    },
    tooltips: false
    //tooltips: [new unitsFormatter(), new unitsFormatter()]
  };

  constructor(
    public shells: ShellListFilterService,
    private currencyPipe: CurrencyPipe
    //private router: Router,
  ) {}

  async ngOnInit() {
  }

  selectSupplier(supplier:Entity) {
    this.supplier = supplier
  }

  resetFilter() {
    this.lengthRange = [0,Number.MAX_SAFE_INTEGER]
    this.widthRange = [0,Number.MAX_SAFE_INTEGER]
    this.depthRange = [0,Number.MAX_SAFE_INTEGER]
    this.costRange = [0,Number.MAX_SAFE_INTEGER]
    this.shellSearchText = undefined
    this.supplier = undefined
    this.filterShells();
  }

  filterShells() {

    this.shells.applyFilter({
      shellSearchText: this.shellSearchText,
      supplier: this.supplier,
      lengthRange: this.lengthRange,
      widthRange: this.widthRange,
      depthRange: this.depthRange,
      costRange: this.costRange
    });

  }

}
