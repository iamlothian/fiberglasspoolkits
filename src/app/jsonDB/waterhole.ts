import { ShellRange, Entity, Asset, Shell, Item } from '../models'
import { Harvest } from './suppliers'
import { colours } from './colours'

export const waterhole = {
  title: 'Waterhole',
  description: 'Waterhole is a pool',
  supplier: Harvest,
  assets: [
    {url:'./assets/images/shells/Harvest/_subWaterhole.jpg'} as Asset
  ] as Array<Asset>,
  shells: [
    {
      cost:15750,
      title: 'Waterhole', description: 'Ceaser',
      length:4360, width:2500, depthMin:1500, depthMax:null,
      assets: [{url:'./assets/images/shells/Harvest/WATERHOLE-DIAGRAM.jpg'} as Asset] as Array<Asset>
    } as Shell
  ] as Array<Shell>,
  colours: colours.filter(c=>["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14"].indexOf(c.entityId) >= 0) as Array<Item>
} as ShellRange
