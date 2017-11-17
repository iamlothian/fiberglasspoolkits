import { ShellRange, Entity, Asset, Shell, Item } from '../models'
import { RAP } from './suppliers'
import { colours } from './colours'

export const statesman = {
  title: 'Statesman',
  description: 'Statesman is a pool',
  supplier: RAP,
  assets: [
    {url:'./assets/images/shells/RAP/Statesman_pic.png'} as Asset,
    {url:'./assets/images/shells/RAP/Statesman.jpg'} as Asset
  ] as Array<Asset>,
  shells: [
    {
      title: 'Statesman 6', description: 'Statesman 6',
      length:6000, width:3500, depthMin:1120, depthMax:1610,
      assets: [{url:'./assets/images/shells/RAP/Statesman6shell.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      title: 'Statesman 7', description: 'Statesman 7',
      length:7000, width:4000, depthMin:1120, depthMax:1710,
      assets: [{url:'./assets/images/shells/RAP/Statesman7shell.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      title: 'Statesman 8', description: 'Statesman 8',
      length:8000, width:4000, depthMin:1120, depthMax:1800,
      assets: [{url:'./assets/images/shells/RAP/Statesman8Shell.png'} as Asset] as Array<Asset>
    } as Shell,
  ] as Array<Shell>,
  colours: colours.filter(c=>["4","5","6","8","20","21","7","22"].indexOf(c.entityId) >= 0) as Array<Item>
} as ShellRange
