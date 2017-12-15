import { ShellRange, Entity, Asset, Shell, Item } from '../models'
import { Harvest } from './suppliers'
import { colours } from './colours'

export const harvest = {
  title: 'Harvest Range',
  description: 'Harvest is a pool',
  supplier: Harvest,
  assets: [
    {url:'./assets/images/shells/Harvest/_subHarvest.jpg'} as Asset
  ] as Array<Asset>,
  shells: [
    {
      cost:15450,
      title: 'Harvest 11', description: 'Harvest',
      length:11400, width:4400, depthMin:1085, depthMax:1850,
      assets: [{url:'./assets/images/shells/Harvest/harvest1.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:14600,
      title: 'Harvest 10', description: 'Harvest',
      length:10400, width:4400, depthMin:1065, depthMax:1775,
      assets: [{url:'./assets/images/shells/Harvest/harvest2.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:13650,
      title: 'Harvest 9', description: 'Harvest',
      length:9400, width:4400, depthMin:1046, depthMax:1700,
      assets: [{url:'./assets/images/shells/Harvest/harvest3.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:12800,
      title: 'Harvest 8', description: 'Harvest',
      length:8400, width:4400, depthMin:1050, depthMax:1630,
      assets: [{url:'./assets/images/shells/Harvest/harvest4.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:11950,
      title: 'Harvest 7', description: 'Harvest',
      length:7400, width:4870, depthMin:1085, depthMax:1550,
      assets: [{url:'./assets/images/shells/Harvest/harvest5.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:11100,
      title: 'Harvest 6', description: 'Harvest',
      length:6400, width:3870, depthMin:1085, depthMax:1850,
      assets: [{url:'./assets/images/shells/Harvest/harvest6.png'} as Asset] as Array<Asset>
    } as Shell
  ] as Array<Shell>,
  colours: colours.filter(c=>["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14"].indexOf(c.entityId) >= 0) as Array<Item>
} as ShellRange
