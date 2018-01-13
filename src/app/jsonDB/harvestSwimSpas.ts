import { ShellRange, Entity, Asset, Shell, Item } from '../models'
import { Harvest } from './suppliers'
import { colours } from './colours'

export const harvestSwimSpa = {
  title: 'Harvest Swim Spa',
  description: 'Swim Spa is a pool',
  supplier: Harvest,
  assets: [
    {url:'./assets/images/shells/Harvest/SWIMSPADIAGRAM1_sml.jpg'} as Asset
  ] as Array<Asset>,
  shells: [
    {
      cost:10200,
      title: 'Swim Spa', description: 'Swim Spa',
      length:5500, width:2600, depthMin:1200, depthMax:null,
      assets: [{url:'./assets/images/shells/Harvest/SWIMSPADIAGRAM1_sml.jpg'} as Asset] as Array<Asset>
    } as Shell
  ] as Array<Shell>,
  colours: colours.filter(c=>["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14"].indexOf(c.entityId) >= 0) as Array<Item>
} as ShellRange

