import { ShellRange, Entity, Asset, Shell, Item } from '../models'
import { Harvest } from './suppliers'
import { colours } from './colours'

export const contemporary = {
  title: 'Contemporary',
  description: 'Contemporary is a pool',
  supplier: Harvest,
  assets: [
    {url:'./assets/images/shells/Harvest/_subContemp.jpg'} as Asset
  ] as Array<Asset>,
  shells: [
    {
      cost:15450,
      title: 'Contemporary 11', description: 'Contemporary',
      length:11000, width:4400, depthMin:1045, depthMax:1820,
      assets: [{url:'./assets/images/shells/Harvest/contemp1.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:14350,
      title: 'Contemporary 10', description: 'Contemporary',
      length:10000, width:4400, depthMin:1060, depthMax:1780,
      assets: [{url:'./assets/images/shells/Harvest/contemp2.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:13700,
      title: 'Contemporary 9', description: 'Contemporary',
      length:9000, width:4400, depthMin:1050, depthMax:1820,
      assets: [{url:'./assets/images/shells/Harvest/contemp3.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:12800,
      title: 'Contemporary 8', description: 'Contemporary',
      length:8000, width:4400, depthMin:1135, depthMax:1670,
      assets: [{url:'./assets/images/shells/Harvest/contemp4.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:12400,
      title: 'Contemporary 7', description: 'Contemporary',
      length:7000, width:4400, depthMin:1125, depthMax:1599,
      assets: [{url:'./assets/images/shells/Harvest/contemp5.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost:11100,
      title: 'Contemporary 6', description: 'Contemporary',
      length:6000, width:3850, depthMin:1160, depthMax:1540,
      assets: [{url:'./assets/images/shells/Harvest/contemp6.png'} as Asset] as Array<Asset>
    } as Shell,
  ] as Array<Shell>,
  colours: colours.filter(c=>["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14"].indexOf(c.entityId) >= 0) as Array<Item>
} as ShellRange
