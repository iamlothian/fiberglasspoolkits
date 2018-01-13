import { ShellRange, Entity, Asset, Shell, Item } from '../models'
import { Harvest } from './suppliers'
import { colours } from './colours'

export const modernClassic = {
  title: 'Modern Classic',
  description: 'Classic is a pool',
  supplier: Harvest,
  assets: [
    {url:'./assets/images/shells/Courtyard/Classic_plunge_pic1.jpg'} as Asset,
    {url:'./assets/images/shells/Courtyard/Classic_plunge_pic2.jpg'} as Asset,
    {url:'./assets/images/shells/Courtyard/Classic_plunge_pic3.jpg'} as Asset
  ] as Array<Asset>,
  shells: [
    {
      cost:10900,
      title: 'Classic 3m', description: 'Classic Plunge 3m',
      length:3000, width:3500, depthMin:1290, depthMax:1475,
      assets: [{url:'./assets/images/shells/Courtyard/Classic_plunge.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:11850,
      title: 'Classic 4m', description: 'Classic Plunge 4m',
      length:4000, width:3500, depthMin:1290, depthMax:1600,
      assets: [{url:'./assets/images/shells/Courtyard/Classic_plunge.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:12100,
      title: 'Classic 5m', description: 'Classic Plunge 5m',
      length:5000, width:3500, depthMin:1290, depthMax:1725,
      assets: [{url:'./assets/images/shells/Courtyard/Classic_plunge.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:12500,
      title: 'Classic 6m', description: 'Classic Plunge 6m',
      length:6000, width:3500, depthMin:1290, depthMax:1850,
      assets: [{url:'./assets/images/shells/Courtyard/Classic_plunge.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:12850,
      title: 'Classic 7m', description: 'Classic Plunge 7m',
      length:7000, width:3500, depthMin:1290, depthMax:1975,
      assets: [{url:'./assets/images/shells/Courtyard/Classic_plunge.png'} as Asset] as Array<Asset>
    } as Shell
  ] as Array<Shell>,
  colours: colours.filter(c=>["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14"].indexOf(c.entityId) >= 0) as Array<Item>
} as ShellRange
