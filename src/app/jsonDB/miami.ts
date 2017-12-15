import { ShellRange, Entity, Asset, Shell, Item } from '../models'
import { Harvest } from './suppliers'
import { colours } from './colours'

export const miami = {
  title: 'Miami',
  description: 'Miami is a pool',
  supplier: Harvest,
  assets: [
    {url:'./assets/images/shells/Harvest/_subMiami.jpg'} as Asset
  ] as Array<Asset>,
  shells: [
    {
      cost:9450,
      title: 'Miami', description: 'Miami',
      length:4900, width:3200, depthMin:1250, depthMax:null,
      assets: [{url:'./assets/images/shells/Harvest/MIAMIDIAGRAM1_sml.png'} as Asset] as Array<Asset>
    } as Shell
  ] as Array<Shell>,
  colours: colours.filter(c=>["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14"].indexOf(c.entityId) >= 0) as Array<Item>
} as ShellRange
