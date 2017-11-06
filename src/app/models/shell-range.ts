import { Entity, EntityId } from './entity'
import { Item } from './item'
import { Asset } from './asset'
import { Shell } from './shell'

export class ShellRange extends Entity {

  shells:Array<Shell>
  colours:Array<Item>
  supplier: Entity
  assets: Array<Asset>
  defaultAssetId:number
  defaultShell:number
  defaultColour:number

}
