import { ShellRange, Entity, Asset, Shell, Item } from '../models'
import { Harvest } from './suppliers'
import { colours } from './colours'

export const urban = {
  title: 'Urban',
  description: 'Urban is a pool',
  supplier: Harvest,
  assets: [
    {url:'./assets/images/shells/Harvest/_subUrban.jpg'} as Asset
  ] as Array<Asset>,
  shells: [
    {
      cost:11850,
      title: 'Urban 8', description: 'Urban',
      length:8000, width:3000, depthMin:1301, depthMax:1727,
      assets: [{url:'./assets/images/shells/Harvest/urban1.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:11150,
      title: 'Urban 7', description: 'Urban',
      length:7000, width:3000, depthMin:1301, depthMax:1661,
      assets: [{url:'./assets/images/shells/Harvest/urban2.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:10550,
      title: 'Urban 5', description: 'Urban',
      length:5800, width:3000, depthMin:1305, depthMax:1595,
      assets: [{url:'./assets/images/shells/Harvest/urban3.png'} as Asset] as Array<Asset>
    } as Shell
  ] as Array<Shell>,
  colours: colours.filter(c=>["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14"].indexOf(c.entityId) >= 0) as Array<Item>
} as ShellRange
