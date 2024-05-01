import { Component, Output, EventEmitter } from '@angular/core';
import { CdkListboxModule, CdkListbox, CdkOption } from '@angular/cdk/listbox';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ListItemData } from '../shared/list-item-data';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'ete-model-list',
    standalone: true,
    imports: [
        CdkListboxModule,
        ScrollingModule,
        CdkListbox,
        CdkOption,
        MatCardModule,
        MatIconModule,
        MatButton
    ],
    templateUrl: './model-list.component.html',
    styleUrl: './model-list.component.scss',
})
export class ModelListComponent {
    @Output()
    itemSelected = new EventEmitter<ListItemData>();

    selectItem(listItemData: readonly ListItemData[]) {
        this.currentItem = listItemData;
        this.itemSelected.emit(listItemData[0]);
    }

    @Output()
    itemToAdd = new EventEmitter<ListItemData>();

    @Output()
    timestamp: number[] = [];

    addModel(listItemData: readonly ListItemData[]) {
        this.currentItem = listItemData;
        console.log('Adding item to editor' + JSON.stringify(listItemData) );
        this.itemToAdd.emit(listItemData[0]);
        this.timestamp.push(Date.now())
        console.log('Timestamp updated to ' + this.timestamp);

    }

    itemlist: ListItemData[] = [
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
        },
    ];

    currentItem: readonly ListItemData[] = [this.itemlist[0]];

    compareId(item1: ListItemData, item2: ListItemData) {
        return item1.id === item2.id;
    }

}


