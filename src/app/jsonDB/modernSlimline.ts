import { ShellRange, Entity, Asset, Shell, Item } from '../models'
import { Harvest } from './suppliers'
import { colours } from './colours'

export const modernSlimline = {
  title: 'Modern Slimline',
  description: 'Classic is a pool',
  supplier: Harvest,
  assets: [
    {url:'./assets/images/shells/Courtyard/Slimline_lap_pic.jpg'} as Asset,
    {url:'./assets/images/shells/Courtyard/Slimline_plunge_pic.jpg'} as Asset
  ] as Array<Asset>,
  shells: [
    {
      cost:10350,
      title: 'Slimline 3m', description: 'Slimline Plunge 3m',
      length:3000, width:2500, depthMin:1290, depthMax:1475,
      assets: [{url:'./assets/images/shells/Courtyard/Slimline_plunge.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:11000,
      title: 'Slimline 4m', description: 'Slimline Plunge 4m',
      length:4000, width:2500, depthMin:1290, depthMax:1600,
      assets: [{url:'./assets/images/shells/Courtyard/Slimline_plunge.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:11350,
      title: 'Slimline 5m', description: 'Slimline Lap 5m',
      length:5000, width:2500, depthMin:1300, depthMax:null,
      assets: [{url:'./assets/images/shells/Courtyard/Slimline_Lap_Side_Flat.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:11750,
      title: 'Slimline 6m', description: 'Slimline Plunge 6m',
      length:6000, width:2500, depthMin:1290, depthMax:1850,
      assets: [{url:'./assets/images/shells/Courtyard/Slimline_plunge.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:12600,
      title: 'Slimline 7m', description: 'Slimline Plunge 7m',
      length:7000, width:2500, depthMin:1290, depthMax:1975,
      assets: [{url:'./assets/images/shells/Courtyard/Slimline_plunge.png'} as Asset] as Array<Asset>
    } as Shell
  ] as Array<Shell>,
  colours: colours.filter(c=>["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14"].indexOf(c.entityId) >= 0) as Array<Item>
} as ShellRange
