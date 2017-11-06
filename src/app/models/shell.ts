import { Item } from './item'
import { Entity, EntityId } from './entity'
import { ShellRange } from './shell-range'

export class Shell extends Item {
  range:ShellRange
  length:number
  width:number
  depthMin:number
  depthMax:number
  defaultAssetId:number
  bluePrintAssetId:number
}
