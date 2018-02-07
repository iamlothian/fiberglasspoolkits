import { Item } from './item'
import { Entity, EntityId } from './entity'
import { ShellRange } from './shell-range'

export class Shell extends Item {
  range:ShellRange        = undefined
  length:number           = 0
  width:number            = 0
  depthMin:number         = 0
  depthMax:number         = 0
  defaultAssetId:number   = 0
  bluePrintAssetId:number = 0
  //UI Props
  isFavorite:boolean      = false
}
