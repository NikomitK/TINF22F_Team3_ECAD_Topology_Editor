import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as demoModel from '../../assets/Submodel_Documentation.json';
import { ListItemData } from './list-item-data';

@Injectable({
  providedIn: 'root'
})
export class AasServiceService {

  constructor(http: HttpClient) { }

  getAasModel(): any {
    return demoModel
  }

  getItems(filter: string) : any[]{
    const items = this.items.filter(
      (item) => [item.name,item.description].some(string => string.toLowerCase().includes(filter.toLowerCase().trim())) 
    ) 
    //filtert Items deren description oder name den String der Suchleiste beinhalten, nicht case sensitiv
    return items.length? items : [] 
  }

  //temp
  items: ListItemData[] = [
    {
        id: 1,
        name: 'Lenze_i950',
        description: 'This is the first demo item',
        price: 10,
        quantity: 1,
    },
    {
        id: 2,
        name: 'TREE 4TX IP67 4xM12',
        description: 'This is the second demo item. It has some unique features.',
        price: 20,
        quantity: 2,
    },
    {
        id: 3,
        name: 'VARIO-X_ASSEMBLY-BPC200-CTRL-FEEDIO',
        description: 'This is the third demo item. It stands out with its exceptional quality.',
        price: 30,
        quantity: 3,
    },
    {
        id: 4,
        name: 'RMM 11/24VDC WITH GROUND BRIDGE OUTPUT RELAY',
        description: 'This is the fourth demo item. It offers great value for its price.',
        price: 40,
        quantity: 4,
    },
    {
        id: 5,
        name: 'Festo_3S7PM0CP4BD',
        description: 'This is the fifth demo item. Customers love its innovative design.',
        price: 50,
        quantity: 5,
    },
    {
      id: 6,
      name: 'SE_Tesys_Island_Power',
      description: 'This is the sixth demo item. It comes with advanced features for tech enthusiasts.',
      price: 60,
      quantity: 6,
  },
  {
      id: 7,
      name: 'PeFu_267075_100078',
      description: 'This is the seventh demo item. It is known for its elegant design and durability.',
      price: 70,
      quantity: 7,
  },
  {
      id: 8,
      name: 'Siemens_S7_CPU1515',
      description: 'This is the eighth demo item. It is a popular choice for outdoor activities.',
      price: 80,
      quantity: 8,
  },
  {
      id: 9,
      name: 'Ninth Item',
      description: 'This is the ninth demo item. It offers versatility and functionality for everyday use.',
      price: 90,
      quantity: 9,
  },
  {
      id: 10,
      name: 'Tenth Item',
      description: 'This is the tenth demo item. Customers appreciate its user-friendly interface.',
      price: 100,
      quantity: 10,
  },
  {
      id: 11,
      name: 'Eleventh Item',
      description: 'This is the eleventh demo item. It is designed for high performance and reliability.',
      price: 110,
      quantity: 11,
  },
  {
      id: 12,
      name: 'Twelfth Item',
      description: 'This is the twelfth demo item. It is a top choice for style and comfort.',
      price: 120,
      quantity: 12,
  },
  {
      id: 13,
      name: 'Thirteenth Item',
      description: 'This is the thirteenth demo item. It is known for its eco-friendly materials.',
      price: 130,
      quantity: 13,
  },
];

}