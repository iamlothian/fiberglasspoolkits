import { Entity, EntityId } from './entity'
import { Item } from './item'
import { Asset } from './asset'
import { Shell } from './shell'

export class ShellRange extends Entity {

  shells:Array<Shell>   = []
  colours:Array<Item>   = []
  supplier: Entity      = new Entity()
  assets: Array<Asset>  = []
  defaultAssetId:number = 0
  defaultShell:number   = 0
  defaultColour:number  = 0
  //UI Props
  isFavorite:boolean      = false
}
