import { Entity } from './entity'

export enum ASSET_TYPE {
  IMAGE,
  DOCUMENT
}

export class Asset extends Entity {
  type:ASSET_TYPE
  width:number
  height:number
  url:string
}
