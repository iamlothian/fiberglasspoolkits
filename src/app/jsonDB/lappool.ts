import { ShellRange, Entity, Asset, Shell, Item } from '../models'
import { Harvest } from './suppliers'
import { colours } from './colours'

export const lappool = {
  title: 'Lap Pool',
  description: 'Lap Pool is a pool',
  supplier: Harvest,
  assets: [
    {url:'./assets/images/shells/Harvest/_subLap.jpg'} as Asset
  ] as Array<Asset>,
  shells: [
    {
      cost:15750,
      title: 'Lap Pool 15', description: 'Lap Pool',
      length:15000, width:3000, depthMin:1300, depthMax:null,
      assets: [{url:'./assets/images/shells/Harvest/lap1.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:14950,
      title: 'Lap Pool 12', description: 'Lap Pool',
      length:12000, width:3000, depthMin:1300, depthMax:null,
      assets: [{url:'./assets/images/shells/Harvest/lap2.png'} as Asset] as Array<Asset>
    } as Shell
  ] as Array<Shell>,
  colours: colours.filter(c=>["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14"].indexOf(c.entityId) >= 0) as Array<Item>
} as ShellRange
