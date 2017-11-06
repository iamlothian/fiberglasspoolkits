import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const ranges = [
      {
        id: '0',
        title: 'Matilda',
        description: 'Matilda is a pool',
        supplier: {
          entityId:1,
          title: 'Real Aussie Pools'
        },
        defaultAssetId:1,
        defaultShell:0,
        defaultColour:0,
        assets: [
          {
            id:0,
            type:0,
            url:'./assets/images/shells/RAP/Matilda.jpg',
            description:'',
            title:'',
            width:0,
            height:0
          },
          {
            id:0,
            type:0,
            url:'./assets/images/shells/RAP/Matilda2.jpg',
            description:'',
            title:'',
            width:0,
            height:0
          },
          {
            id:0,
            type:0,
            url:'./assets/images/shells/RAP/Matilda3.jpg',
            description:'',
            title:'',
            width:0,
            height:0
          }
        ],
        shells:[
          {
            id: '0',
            title: 'Matilda 7',
            description: 'Matilda 7',
            length:7300,
            width:4200,
            depthMin:1050,
            depthMax:1640,
            defaultAssetId:0,
            bluePrintAssetId:0,
            assets: [
              {
                id:0,
                type:0,
                url:'./assets/images/shells/RAP/Matilda7shell.png',
                title:'Matilad 7',
                description:'',
                width:0,
                height:0
              }
            ],
          },{
            id: '0',
            title: 'Matilda 8',
            description: 'Matilda 8',
            length:8300,
            width:4200,
            depthMin:1050,
            depthMax:1730,
            defaultAssetId:0,
            bluePrintAssetId:0,
            assets: [
              {
                id:0,
                type:0,
                url:'./assets/images/shells/RAP/Matilda8shell.png',
                title:'Matilad 8',
                description:'',
                width:0,
                height:0
              }
            ],
          },{
            id: '0',
            title: 'Matilda 9',
            description: 'Matilda 9',
            length:9300,
            width:4200,
            depthMin:1050,
            depthMax:1800,
            defaultAssetId:0,
            bluePrintAssetId:0,
            assets: [
              {
                id:0,
                type:0,
                url:'./assets/images/shells/RAP/Matilda9shell.png',
                title:'Matilad 9',
                description:'',
                width:0,
                height:0
              }
            ],
          },{
            id: '0',
            title: 'Matilda 10',
            description: 'Matilda 10',
            length:10300,
            width:4200,
            depthMin:1100,
            depthMax:1900,
            defaultAssetId:0,
            bluePrintAssetId:0,
            assets: [
              {
                id:0,
                type:0,
                url:'./assets/images/shells/RAP/Matilda10shell.png',
                title:'Matilad 10',
                description:'',
                width:0,
                height:0
              }
            ],
          }
        ],
        colours:[
          {
            id:0,
            description:'Aquaguard Cultured Finish Gelcoat',
            title:'Bermuda Blue',
            cost:0,
            assets: [
              {
                id:0,
                type:0,
                url:'./assets/images/shells/colours/AQUA-JADE1.jpg',
                description:'Aquaguard Cultured Finish Gelcoat',
                title:'Bermuda Blue',
                width:0,
                height:0
              }
            ],
          },
          {
            id:1,
            description:'Aquaguard Cultured Finish Gelcoat',
            title:'Coral Blue',
            cost:0,
            assets: [
              {
                id:0,
                type:0,
                url:'./assets/images/shells/colours/AQUA-JADE1.jpg',
                title:'Coral Blue',
                description:'Aquaguard Cultured Finish Gelcoat',
                width:0,
                height:0
              }
            ],
          }
        ]
      },

      {
        id: '0',
        title: 'Matilda',
        description: 'Matilda is a pool',
        supplier: {
          entityId:1,
          title: 'Real Aussie Pools'
        },
        defaultAssetId:1,
        defaultShell:0,
        defaultColour:0,
        assets: [
          {
            id:0,
            type:0,
            url:'./assets/images/shells/RAP/Matilda.jpg',
            description:'',
            title:'',
            width:0,
            height:0
          },
          {
            id:0,
            type:0,
            url:'./assets/images/shells/RAP/Matilda2.jpg',
            description:'',
            title:'',
            width:0,
            height:0
          },
          {
            id:0,
            type:0,
            url:'./assets/images/shells/RAP/Matilda3.jpg',
            description:'',
            title:'',
            width:0,
            height:0
          }
        ],
        shells:[
          {
            id: '0',
            title: 'Matilda 7',
            description: 'Matilda 7',
            length:7300,
            width:4200,
            depthMin:1050,
            depthMax:1640,
            defaultAssetId:0,
            bluePrintAssetId:0,
            assets: [
              {
                id:0,
                type:0,
                url:'./assets/images/shells/RAP/Matilda7shell.png',
                title:'Matilad 7',
                description:'',
                width:0,
                height:0
              }
            ],
          },{
            id: '0',
            title: 'Matilda 8',
            description: 'Matilda 8',
            length:8300,
            width:4200,
            depthMin:1050,
            depthMax:1730,
            defaultAssetId:0,
            bluePrintAssetId:0,
            assets: [
              {
                id:0,
                type:0,
                url:'',
                title:'',
                description:'',
                width:0,
                height:0
              }
            ],
          },{
            id: '0',
            title: 'Matilda 9',
            description: 'Matilda 9',
            length:9300,
            width:4200,
            depthMin:1050,
            depthMax:1800,
            defaultAssetId:0,
            bluePrintAssetId:0,
            assets: [
              {
                id:0,
                type:0,
                url:'',
                title:'',
                description:'',
                width:0,
                height:0
              }
            ],
          },{
            id: '0',
            title: 'Matilda 10',
            description: 'Matilda 10',
            length:10300,
            width:4200,
            depthMin:1100,
            depthMax:1900,
            defaultAssetId:0,
            bluePrintAssetId:0,
            assets: [
              {
                id:0,
                type:0,
                url:'',
                title:'',
                description:'',
                width:0,
                height:0
              }
            ],
          }
        ],
        colours:[
          {
            id:0,
            description:'Aquaguard Cultured Finish Gelcoat',
            title:'Bermuda Blue',
            cost:0,
            assets: [
              {
                id:0,
                type:0,
                url:'./assets/images/shells/colours/AQUA-JADE1.jpg',
                description:'Aquaguard Cultured Finish Gelcoat',
                title:'Bermuda Blue',
                width:0,
                height:0
              }
            ],
          },
          {
            id:1,
            description:'Aquaguard Cultured Finish Gelcoat',
            title:'Coral Blue',
            cost:0,
            assets: [
              {
                id:0,
                type:0,
                url:'./assets/images/shells/colours/AQUA-JADE1.jpg',
                title:'Coral Blue',
                description:'Aquaguard Cultured Finish Gelcoat',
                width:0,
                height:0
              }
            ],
          }
        ]
      },

      {
        id: '0',
        title: 'Matilda',
        description: 'Matilda is a pool',
        supplier: {
          entityId:1,
          title: 'Real Aussie Pools'
        },
        defaultAssetId:1,
        defaultShell:0,
        defaultColour:0,
        assets: [
          {
            id:0,
            type:0,
            url:'./assets/images/shells/RAP/Matilda.jpg',
            description:'',
            title:'',
            width:0,
            height:0
          },
          {
            id:0,
            type:0,
            url:'./assets/images/shells/RAP/Matilda2.jpg',
            description:'',
            title:'',
            width:0,
            height:0
          },
          {
            id:0,
            type:0,
            url:'./assets/images/shells/RAP/Matilda3.jpg',
            description:'',
            title:'',
            width:0,
            height:0
          }
        ],
        shells:[
          {
            id: '0',
            title: 'Matilda 7',
            description: 'Matilda 7',
            length:7300,
            width:4200,
            depthMin:1050,
            depthMax:1640,
            defaultAssetId:0,
            bluePrintAssetId:0,
            assets: [
              {
                id:0,
                type:0,
                url:'./assets/images/shells/RAP/Matilda7shell.png',
                title:'Matilad 7',
                description:'',
                width:0,
                height:0
              }
            ],
          },{
            id: '0',
            title: 'Matilda 8',
            description: 'Matilda 8',
            length:8300,
            width:4200,
            depthMin:1050,
            depthMax:1730,
            defaultAssetId:0,
            bluePrintAssetId:0,
            assets: [
              {
                id:0,
                type:0,
                url:'',
                title:'',
                description:'',
                width:0,
                height:0
              }
            ],
          },{
            id: '0',
            title: 'Matilda 9',
            description: 'Matilda 9',
            length:9300,
            width:4200,
            depthMin:1050,
            depthMax:1800,
            defaultAssetId:0,
            bluePrintAssetId:0,
            assets: [
              {
                id:0,
                type:0,
                url:'',
                title:'',
                description:'',
                width:0,
                height:0
              }
            ],
          },{
            id: '0',
            title: 'Matilda 10',
            description: 'Matilda 10',
            length:10300,
            width:4200,
            depthMin:1100,
            depthMax:1900,
            defaultAssetId:0,
            bluePrintAssetId:0,
            assets: [
              {
                id:0,
                type:0,
                url:'',
                title:'',
                description:'',
                width:0,
                height:0
              }
            ],
          }
        ],
        colours:[
          {
            id:0,
            description:'Aquaguard Cultured Finish Gelcoat',
            title:'Bermuda Blue',
            cost:0,
            assets: [
              {
                id:0,
                type:0,
                url:'./assets/images/shells/colours/AQUA-JADE1.jpg',
                description:'Aquaguard Cultured Finish Gelcoat',
                title:'Bermuda Blue',
                width:0,
                height:0
              }
            ],
          },
          {
            id:1,
            description:'Aquaguard Cultured Finish Gelcoat',
            title:'Coral Blue',
            cost:0,
            assets: [
              {
                id:0,
                type:0,
                url:'./assets/images/shells/colours/AQUA-JADE1.jpg',
                title:'Coral Blue',
                description:'Aquaguard Cultured Finish Gelcoat',
                width:0,
                height:0
              }
            ],
          }
        ]
      },

      {
        id: '0',
        title: 'Matilda',
        description: 'Matilda is a pool',
        supplier: {
          entityId:1,
          title: 'Real Aussie Pools'
        },
        defaultAssetId:1,
        defaultShell:0,
        defaultColour:0,
        assets: [
          {
            id:0,
            type:0,
            url:'./assets/images/shells/RAP/Matilda.jpg',
            description:'',
            title:'',
            width:0,
            height:0
          },
          {
            id:0,
            type:0,
            url:'./assets/images/shells/RAP/Matilda2.jpg',
            description:'',
            title:'',
            width:0,
            height:0
          },
          {
            id:0,
            type:0,
            url:'./assets/images/shells/RAP/Matilda3.jpg',
            description:'',
            title:'',
            width:0,
            height:0
          }
        ],
        shells:[
          {
            id: '0',
            title: 'Matilda 7',
            description: 'Matilda 7',
            length:7300,
            width:4200,
            depthMin:1050,
            depthMax:1640,
            defaultAssetId:0,
            bluePrintAssetId:0,
            assets: [
              {
                id:0,
                type:0,
                url:'./assets/images/shells/RAP/Matilda7shell.png',
                title:'Matilad 7',
                description:'',
                width:0,
                height:0
              }
            ],
          },{
            id: '0',
            title: 'Matilda 8',
            description: 'Matilda 8',
            length:8300,
            width:4200,
            depthMin:1050,
            depthMax:1730,
            defaultAssetId:0,
            bluePrintAssetId:0,
            assets: [
              {
                id:0,
                type:0,
                url:'',
                title:'',
                description:'',
                width:0,
                height:0
              }
            ],
          },{
            id: '0',
            title: 'Matilda 9',
            description: 'Matilda 9',
            length:9300,
            width:4200,
            depthMin:1050,
            depthMax:1800,
            defaultAssetId:0,
            bluePrintAssetId:0,
            assets: [
              {
                id:0,
                type:0,
                url:'',
                title:'',
                description:'',
                width:0,
                height:0
              }
            ],
          },{
            id: '0',
            title: 'Matilda 10',
            description: 'Matilda 10',
            length:10300,
            width:4200,
            depthMin:1100,
            depthMax:1900,
            defaultAssetId:0,
            bluePrintAssetId:0,
            assets: [
              {
                id:0,
                type:0,
                url:'',
                title:'',
                description:'',
                width:0,
                height:0
              }
            ],
          }
        ],
        colours:[
          {
            id:0,
            description:'Aquaguard Cultured Finish Gelcoat',
            title:'Bermuda Blue',
            cost:0,
            assets: [
              {
                id:0,
                type:0,
                url:'./assets/images/shells/colours/AQUA-JADE1.jpg',
                description:'Aquaguard Cultured Finish Gelcoat',
                title:'Bermuda Blue',
                width:0,
                height:0
              }
            ],
          },
          {
            id:1,
            description:'Aquaguard Cultured Finish Gelcoat',
            title:'Coral Blue',
            cost:0,
            assets: [
              {
                id:0,
                type:0,
                url:'./assets/images/shells/colours/AQUA-JADE1.jpg',
                title:'Coral Blue',
                description:'Aquaguard Cultured Finish Gelcoat',
                width:0,
                height:0
              }
            ],
          }
        ]
      },

      {
        id: '0',
        title: 'Matilda',
        description: 'Matilda is a pool',
        supplier: {
          entityId:1,
          title: 'Real Aussie Pools'
        },
        defaultAssetId:1,
        defaultShell:0,
        defaultColour:0,
        assets: [
          {
            id:0,
            type:0,
            url:'./assets/images/shells/RAP/Matilda.jpg',
            description:'',
            title:'',
            width:0,
            height:0
          },
          {
            id:0,
            type:0,
            url:'./assets/images/shells/RAP/Matilda2.jpg',
            description:'',
            title:'',
            width:0,
            height:0
          },
          {
            id:0,
            type:0,
            url:'./assets/images/shells/RAP/Matilda3.jpg',
            description:'',
            title:'',
            width:0,
            height:0
          }
        ],
        shells:[
          {
            id: '0',
            title: 'Matilda 7',
            description: 'Matilda 7',
            length:7300,
            width:4200,
            depthMin:1050,
            depthMax:1640,
            defaultAssetId:0,
            bluePrintAssetId:0,
            assets: [
              {
                id:0,
                type:0,
                url:'./assets/images/shells/RAP/Matilda7shell.png',
                title:'Matilad 7',
                description:'',
                width:0,
                height:0
              }
            ],
          },{
            id: '0',
            title: 'Matilda 8',
            description: 'Matilda 8',
            length:8300,
            width:4200,
            depthMin:1050,
            depthMax:1730,
            defaultAssetId:0,
            bluePrintAssetId:0,
            assets: [
              {
                id:0,
                type:0,
                url:'',
                title:'',
                description:'',
                width:0,
                height:0
              }
            ],
          },{
            id: '0',
            title: 'Matilda 9',
            description: 'Matilda 9',
            length:9300,
            width:4200,
            depthMin:1050,
            depthMax:1800,
            defaultAssetId:0,
            bluePrintAssetId:0,
            assets: [
              {
                id:0,
                type:0,
                url:'',
                title:'',
                description:'',
                width:0,
                height:0
              }
            ],
          },{
            id: '0',
            title: 'Matilda 10',
            description: 'Matilda 10',
            length:10300,
            width:4200,
            depthMin:1100,
            depthMax:1900,
            defaultAssetId:0,
            bluePrintAssetId:0,
            assets: [
              {
                id:0,
                type:0,
                url:'',
                title:'',
                description:'',
                width:0,
                height:0
              }
            ],
          }
        ],
        colours:[
          {
            id:0,
            description:'Aquaguard Cultured Finish Gelcoat',
            title:'Bermuda Blue',
            cost:0,
            assets: [
              {
                id:0,
                type:0,
                url:'./assets/images/shells/colours/AQUA-JADE1.jpg',
                description:'Aquaguard Cultured Finish Gelcoat',
                title:'Bermuda Blue',
                width:0,
                height:0
              }
            ],
          },
          {
            id:1,
            description:'Aquaguard Cultured Finish Gelcoat',
            title:'Coral Blue',
            cost:0,
            assets: [
              {
                id:0,
                type:0,
                url:'./assets/images/shells/colours/AQUA-JADE1.jpg',
                title:'Coral Blue',
                description:'Aquaguard Cultured Finish Gelcoat',
                width:0,
                height:0
              }
            ],
          }
        ]
      }
    ]

    return {ranges};
  }
}
