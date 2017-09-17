import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const kits = [
      {
          id: 0,
          title: 'kit 1',
          supplier: 'davy',
          gallery: [
            {
              id:1,
              url:"",
              alt:"",
              caption:""
            }
          ],
          blueprint: [
            {
              id:2,
              url:"",
              alt:"",
              caption:""
            }
          ],
          colours: [
            {
              id:0,
              title: "blue",
              url: "",
            },
            {
              id:1,
              title: "blue",
              url: "",
            }
          ],
          sizes: [
            {
              id:0,
              title: "blue",
              url: "",
            }
          ]
      },
    ];
    return {kits};
  }
}
