import { Entity } from './entity'

export enum ASSET_TYPE {
  IMAGE,
  DOCUMENT
}

export class Asset extends Entity {
  type:ASSET_TYPE = ASSET_TYPE.IMAGE
  width:number    = 0
  height:number   = 0
  url:string      = ""
}
