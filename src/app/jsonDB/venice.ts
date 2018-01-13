import { ShellRange, Entity, Asset, Shell, Item } from '../models'
import { Harvest } from './suppliers'
import { colours } from './colours'

export const venice = {
  title: 'Venice',
  description: 'Venice is a pool',
  supplier: Harvest,
  assets: [
    {url:'./assets/images/shells/Harvest/_subVenice.jpg'} as Asset
  ] as Array<Asset>,
  shells: [
    {
      cost:13400,
      title: 'Venice 9', description: 'Venice',
      length:9000, width:4260, depthMin:1144, depthMax:1690,
      assets: [{url:'./assets/images/shells/Harvest/venice1.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:12700,
      title: 'Venice 8', description: 'Venice',
      length:8000, width:4260, depthMin:1176, depthMax:1655,
      assets: [{url:'./assets/images/shells/Harvest/venice2.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:12300,
      title: 'Venice 7', description: 'Venice',
      length:7000, width:4260, depthMin:1205, depthMax:1618,
      assets: [{url:'./assets/images/shells/Harvest/venice3.png'} as Asset] as Array<Asset>
    } as Shell
  ] as Array<Shell>,
  colours: colours.filter(c=>["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14"].indexOf(c.entityId) >= 0) as Array<Item>
} as ShellRange
