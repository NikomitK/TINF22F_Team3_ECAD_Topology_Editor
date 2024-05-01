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

  getItems(filter: string) {
    const items = this.items.filter(
      (item) => [item.name,item.description].some(string => string.toLowerCase().includes(filter.toLowerCase())) 
    ) 
    //filtert Items deren description oder name den String der suchleiste beinhalten, nicht case sensitiv
    return items.length? items : [] 
  }

  //temp
  items: ListItemData [] = [
    {
        id: 1,
        name: 'First Item',
        description: 'This is the first demo item',
        price: 10,
        quantity: 1,
    },
    {
        id: 2,
        name: 'Second Item',
        description: 'This is the second demo item',
        price: 20,
        quantity: 2,
    },
    {
        id: 3,
        name: 'Third Item',
        description: 'This is the third demo item',
        price: 30,
        quantity: 3,
    },
    {
        id: 4,
        name: 'Second Item',
        description: 'This is the second demo item',
        price: 20,
        quantity: 2,
    },
    {
        id: 5,
        name: 'Third Item',
        description: 'This is the third demo item',
        price: 30,
        quantity: 3,
    },
    {
        id: 6,
        name: 'Second Item',
        description: 'This is the second demo item',
        price: 20,
        quantity: 2,
    },
    {
        id: 7,
        name: 'Third Item',
        description: 'This is the third demo item',
        price: 30,
        quantity: 3,
    },
    {
        id: 8,
        name: 'Second Item',
        description: 'This is the second demo item',
        price: 20,
        quantity: 2,
    },
    {
        id: 9,
        name: 'Third Item',
        description: 'This is the third demo item',
        price: 30,
        quantity: 3,
    },
    {
        id: 10,
        name: 'Second Item',
        description: 'This is the second demo item',
        price: 20,
        quantity: 2,
    },
    {
        id: 11,
        name: 'Third Item',
        description: 'This is the third demo item',
        price: 30,
        quantity: 3,
    },
    {
        id: 12,
        name: 'Second Item',
        description: 'This is the second demo item',
        price: 20,
        quantity: 2,
    },
    {
        id: 13,
        name: 'Third Item',
        description: 'This is the third demo item',
        price: 30,
        quantity: 3,
    }
  ]

}
