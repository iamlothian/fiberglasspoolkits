import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ShellRange, Entity, Asset, Shell, Item } from './models'
import { matilda, patio, statesman, swimspa, courtyard, caesar, classic, contemporary, harvest, harvestSwimSpa, lappool, miami, oz, urban, venice, waterhole } from './jsonDB'

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const ranges = [
      matilda, patio, statesman, swimspa, courtyard, caesar, classic, contemporary, harvest, harvestSwimSpa, lappool, miami, oz, urban, venice, waterhole
    ]

    return {ranges};
  }
}
