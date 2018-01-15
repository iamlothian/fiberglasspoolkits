import { ShellRange, Entity, Asset, Shell, Item } from '../models'
import { Stronglass } from './suppliers'
import { colours } from './colours'

export const swimspa = {
  title: 'Stroglass Swim Spa',
  description: 'Swim Spa is a pool',
  supplier: Stronglass,
  assets: [
    {url:'./assets/images/shells/RAP/SwimSpaShell.png'} as Asset
  ] as Array<Asset>,
  shells: [
    {
      cost: 9600,
      title: 'Swim Spa', description: 'Swim Spa',
      length:5000, width:3300, depthMin:1300, depthMax:null,
      assets: [{url:'./assets/images/shells/RAP/SwimSpaShell.png'} as Asset] as Array<Asset>
    } as Shell
  ] as Array<Shell>,
  colours: colours.filter(c=>["4","5","6","8","20","21","7","22"].indexOf(c.entityId) >= 0) as Array<Item>
} as ShellRange
