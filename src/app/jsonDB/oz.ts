import { ShellRange, Entity, Asset, Shell, Item } from '../models'
import { Harvest } from './suppliers'
import { colours } from './colours'

export const oz = {
  title: 'Oz',
  description: 'Oz is a pool',
  supplier: Harvest,
  assets: [
    {url:'./assets/images/shells/Harvest/_subOz.jpg'} as Asset
  ] as Array<Asset>,
  shells: [
    {
      cost:12600,
      title: 'Oz 9', description: 'Oz',
      length:9200, width:4400, depthMin:1110, depthMax:1720,
      assets: [{url:'./assets/images/shells/Harvest/oz1.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:14100,
      title: 'Oz 8', description: 'Oz',
      length:8200, width:4400, depthMin:1110, depthMax:1630,
      assets: [{url:'./assets/images/shells/Harvest/oz2.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:14100,
      title: 'Oz 7', description: 'Oz',
      length:7200, width:4400, depthMin:1170, depthMax:1630,
      assets: [{url:'./assets/images/shells/Harvest/oz3.png'} as Asset] as Array<Asset>
    } as Shell
  ] as Array<Shell>,
  colours: colours.filter(c=>["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14"].indexOf(c.entityId) >= 0) as Array<Item>
} as ShellRange
