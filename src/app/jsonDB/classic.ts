import { ShellRange, Entity, Asset, Shell, Item } from '../models'
import { Harvest } from './suppliers'
import { colours } from './colours'

export const classic = {
  title: 'Classic',
  description: 'Classic is a pool',
  supplier: Harvest,
  assets: [
    {url:'./assets/images/shells/Harvest/_subclassic.jpg'} as Asset
  ] as Array<Asset>,
  shells: [
    {
      cost:12600,
      title: 'Ceaser 10', description: 'Ceaser',
      length:10100, width:4400, depthMin:955, depthMax:1780,
      assets: [{url:'./assets/images/shells/Harvest/classic1.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:14100,
      title: 'Ceaser 8', description: 'Ceaser',
      length:8000, width:4400, depthMin:950, depthMax:1590,
      assets: [{url:'./assets/images/shells/Harvest/classic2.png'} as Asset] as Array<Asset>
    } as Shell
  ] as Array<Shell>,
  colours: colours.filter(c=>["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14"].indexOf(c.entityId) >= 0) as Array<Item>
} as ShellRange
