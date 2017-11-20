import { ShellRange, Entity, Asset, Shell, Item } from '../models'
import { RAP } from './suppliers'
import { colours } from './colours'

export const patio = {
  title: 'Patio',
  description: 'Patio is a pool',
  supplier: RAP,
  assets: [
    {url:'./assets/images/shells/RAP/Patio_pic.jpg'} as Asset
  ] as Array<Asset>,
  shells: [
    {
      cost: 9100,
      title: 'Matilda 5', description: 'Matilda 5',
      length:5000, width:3000, depthMin:1400, depthMax:null,
      assets: [{url:'./assets/images/shells/RAP/Patio5shell.png'} as Asset] as Array<Asset>
    } as Shell,
    {
      cost: 10250,
      title: 'Matilda 6', description: 'Matilda 6',
      length:8300, width:4200, depthMin:1400, depthMax:null,
      assets: [{url:'./assets/images/shells/RAP/Patio6Shell.png'} as Asset] as Array<Asset>
    } as Shell
  ] as Array<Shell>,
  colours: colours.filter(c=>["4","5","6","8","20","21","7","22"].indexOf(c.entityId) >= 0) as Array<Item>
} as ShellRange
