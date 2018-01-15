import { Entity, EntityId } from './entity'
import { Asset } from './asset'

export class Item extends Entity {
  cost:number           = 0
  perLinMtr:boolean   = false
  assets: Array<Asset>  = []
}
