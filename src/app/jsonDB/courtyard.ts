import { ShellRange, Entity, Asset, Shell, Item } from '../models'
import { Courtyard } from './suppliers'
import { colours } from './colours'

export const courtyard = {
  title: 'Courtyard',
  description: 'Courtyard is a pool',
  supplier: Courtyard,
  assets: [
    {url:'./assets/images/shells/Courtyard/Courtyard_pic.jpg'} as Asset
  ] as Array<Asset>,
  shells: [
    {
      cost:9350,
      title: 'Courtyard 3', description: 'Courtyard 4',
      length:3000, width:1900, depthMin:1290, depthMax:1475,
      assets: [{url:'./assets/images/shells/Courtyard/Courtyard.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:9750,
      title: 'Courtyard 4', description: 'Courtyard 4',
      length:4000, width:1900, depthMin:1290, depthMax:1600,
      assets: [{url:'./assets/images/shells/Courtyard/Courtyard.png'} as Asset] as Array<Asset>
    } as Shell
  ] as Array<Shell>,
  colours: colours.filter(c=>["15","16","17","18","19"].indexOf(c.entityId) >= 0) as Array<Item>
} as ShellRange
