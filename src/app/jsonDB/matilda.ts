import { ShellRange, Entity, Asset, Shell, Item } from '../models'
import { Stronglass } from './suppliers'
import { colours } from './colours'

export const matilda = {
  title: 'Stronglass Matilda',
  description: 'Matilda is a pool',
  supplier: Stronglass,
  assets: [
    {url:'./assets/images/shells/RAP/Matilda.jpg'} as Asset,
    {url:'./assets/images/shells/RAP/Matilda2.jpg'} as Asset,
    {url:'./assets/images/shells/RAP/Matilda3.jpg'} as Asset
  ] as Array<Asset>,
  shells: [
    {
      cost: 11350,
      title: 'Matilda 7', description: 'Matilda 7',
      length:7300, width:4200, depthMin:1050, depthMax:1640,
      assets: [{url:'./assets/images/shells/RAP/Matilda7shell.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost: 12500,
      title: 'Matilda 8', description: 'Matilda 8',
      length:8300, width:4200, depthMin:1050, depthMax:1730,
      assets: [{url:'./assets/images/shells/RAP/Matilda8shell.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost: 13800,
      title: 'Matilda 9', description: 'Matilda 9',
      length:9300, width:4200, depthMin:1050, depthMax:1800,
      assets: [{url:'./assets/images/shells/RAP/Matilda9shell.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost: 15100,
      title: 'Matilda 10', description: 'Matilda 10',
      length:10300, width:4200, depthMin:1100, depthMax:1900,
      assets: [{url:'./assets/images/shells/RAP/Matilda10shell.png'} as Asset] as Array<Asset>
    } as Shell
  ] as Array<Shell>,
  colours: colours.filter(c=>["4","5","6","8","20","21","7","22"].indexOf(c.entityId) >= 0) as Array<Item>
} as ShellRange
