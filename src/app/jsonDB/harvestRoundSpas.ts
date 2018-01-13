import { ShellRange, Entity, Asset, Shell, Item } from '../models'
import { Harvest } from './suppliers'
import { colours } from './colours'

export const harvestRoundSpa = {
  title: 'Harvest Round Spa',
  description: 'Swim Spa is a pool',
  supplier: Harvest,
  assets: [
    {url:'./assets/images/shells/Harvest/_subSpa.jpg'} as Asset,
    {url:'./assets/images/shells/Harvest/spas2.png'} as Asset
  ] as Array<Asset>,
  shells: [
    {
      cost:6200,
      title: 'Round Spa', description: 'Round Spa',
      length:5500, width:2600, depthMin:1200, depthMax:null,
      assets: [{url:'./assets/images/shells/Harvest/spas2.png'} as Asset] as Array<Asset>
    } as Shell
  ] as Array<Shell>,
  colours: colours.filter(c=>["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14"].indexOf(c.entityId) >= 0) as Array<Item>
} as ShellRange

