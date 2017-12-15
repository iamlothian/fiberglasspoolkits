import { ShellRange, Entity, Asset, Shell, Item } from '../models'
import { Harvest } from './suppliers'
import { colours } from './colours'

export const caesar = {
  title: 'Caesar',
  description: 'Caesar is a pool',
  supplier: Harvest,
  assets: [
    {url:'./assets/images/shells/Harvest/_subCaesar.jpg'} as Asset
  ] as Array<Asset>,
  shells: [
    {
      cost:15450,
      title: 'Ceaser 11', description: 'Ceaser',
      length:11700, width:4250, depthMin:955, depthMax:1780,
      assets: [{url:'./assets/images/shells/Harvest/ceaser1.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:13650,
      title: 'Ceaser 9', description: 'Ceaser',
      length:9700, width:4250, depthMin:955, depthMax:1535,
      assets: [{url:'./assets/images/shells/Harvest/ceaser2.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:12400,
      title: 'Ceaser 7', description: 'Ceaser',
      length:7700, width:4250, depthMin:955, depthMax:1350,
      assets: [{url:'./assets/images/shells/Harvest/ceaser3.png'} as Asset] as Array<Asset>
    } as Shell
  ] as Array<Shell>,
  colours: colours.filter(c=>["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14"].indexOf(c.entityId) >= 0) as Array<Item>
} as ShellRange
