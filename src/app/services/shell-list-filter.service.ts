import { Injectable }                 from '@angular/core';
import { ShellRange, Entity, Shell }  from '../models'
import { ShellRangeService }          from '../services/range.service'
import { promise } from 'selenium-webdriver';

export type RangeMaxMin = [number,number];

@Injectable()
export class ShellListFilterService {

  private _allRanges:Array<ShellRange> = []
  private _filteredRanges:Array<ShellRange> = []
  public get filteredRanges():Array<ShellRange> {
    return this._filteredRanges
  }

  private _maxLength:number = 0
  private _minLength:number = Number.MAX_SAFE_INTEGER
  public get maxLength():number { return this._maxLength }
  public get minLength():number { return this._minLength }

  private _maxWidth:number = 0
  private _minWidth:number = Number.MAX_SAFE_INTEGER
  public get maxWidth():number { return this._maxWidth }
  public get minWidth():number { return this._minWidth }

  private _maxDepth:number = 0
  private _minDepth:number = Number.MAX_SAFE_INTEGER
  public get maxDepth():number { return this._maxDepth }
  public get minDepth():number { return this._minDepth }

  private _maxCost:number = 0
  private _minCost:number = Number.MAX_SAFE_INTEGER
  public get maxCost():number { return this._maxCost }
  public get minCost():number { return this._minCost }

  private _suppliers:Array<Entity> = []
  public get suppliers():Array<Entity> { return this._suppliers }

  constructor(private rangeService: ShellRangeService) {
    this.rangeService.get().then(
      shells => {
        this.init(shells)
      },
    )
  }

  private init(shells: Array<ShellRange>): void {
    this._allRanges = shells;
    this._filteredRanges = this._allRanges

    this._allRanges.forEach(r => {
      // collect all suppliers from list
      if(this._suppliers.findIndex(s => s.entityId === r.supplier.entityId) < 0) { this._suppliers.push(r.supplier) }

      let maxShellLength = r.shells.reduce((m,s) => m >= s.length ? m : s.length, 0)
      if(this._maxLength <= maxShellLength) { this._maxLength = maxShellLength }

      let minShellLength = r.shells.reduce((m,s) => m >= s.length ? s.length : m,  Number.MAX_SAFE_INTEGER)
      if(this._minLength >= minShellLength) { this._minLength = minShellLength }

      let maxShellWidth = r.shells.reduce((m,s) => m >= s.width ? m : s.width, 0)
      if(this._maxWidth <= maxShellWidth) { this._maxWidth = maxShellWidth }

      let minShellWidth = r.shells.reduce((m,s) => m >= s.width ? s.width : m, Number.MAX_SAFE_INTEGER)
      if(this._minWidth >= minShellWidth) { this._minWidth = minShellWidth }

      let maxShellDepth = r.shells.reduce((m,s) => m >= (s.depthMax || s.depthMin) ? m : (s.depthMax || s.depthMin), 0)
      if(this._maxDepth <= maxShellDepth) { this._maxDepth = maxShellDepth }

      let minShellDepth = r.shells.reduce((m,s) => m >= s.depthMin ? s.depthMin : m, Number.MAX_SAFE_INTEGER)
      if(this._minDepth >= minShellDepth) { this._minDepth = minShellDepth }

      let maxShellCost = r.shells.reduce((m,s) => m >= s.cost ? m : s.cost, 0)
      if (this._maxCost <= maxShellCost) { this._maxCost = maxShellCost }

      let minShellCost = r.shells.reduce((m,s) => m <= s.cost ? m : s.cost, Number.MAX_SAFE_INTEGER)
      if (this._minCost >= minShellCost) { this._minCost = minShellCost }

    })
  }

  public applyFilter({
    shellSearchText,
    supplier = null,
    lengthRange = [0,Number.MAX_SAFE_INTEGER],
    widthRange = [0,Number.MAX_SAFE_INTEGER],
    depthRange = [0,Number.MAX_SAFE_INTEGER],
    costRange = [0,Number.MAX_SAFE_INTEGER]
  } : {
      shellSearchText:string,
      supplier?:Entity,
      lengthRange?:RangeMaxMin,
      widthRange?:RangeMaxMin,
      depthRange?:RangeMaxMin,
      costRange?:RangeMaxMin
  }) {

    this._filteredRanges = []

    this._allRanges.forEach(r => {

      var shells = r.shells
      .filter(s => s.length >= lengthRange[0] && s.length <= lengthRange[1])
      .filter(s => s.width >= widthRange[0] && s.width <= widthRange[1])
      .filter(s => s.depthMin >= depthRange[0] && (s.depthMax || s.depthMin) <= depthRange[1])

      if (
        shells.length > 0 &&
        (!supplier || !!supplier && r.supplier.entityId === supplier.entityId) &&
        (!shellSearchText || !!shellSearchText && r.title.toLowerCase().indexOf(shellSearchText.toLowerCase()) !== -1)
      ){
        var range = Object.assign({}, r)
        range.shells = shells
        this._filteredRanges.push(range)
      }

    })

  }

}
