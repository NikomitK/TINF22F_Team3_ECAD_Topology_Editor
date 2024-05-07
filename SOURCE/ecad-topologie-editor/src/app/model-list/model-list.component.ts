import { Component, Output, EventEmitter, Input } from '@angular/core';
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
    
    @Input() itemlist!: ListItemData[] 
    
    @Input() currentItem!: ListItemData
    
    @Output()
    itemToAdd = new EventEmitter<ListItemData>();

    @Output()
    timestamp: number[] = [];

    selectItem(listItemData: readonly ListItemData[]) {
        this.itemSelected.emit(listItemData[0]);
    }

    addModel(listItemData: readonly ListItemData[]) {
        this.currentItem = listItemData;
        console.log('Adding item to editor' + JSON.stringify(listItemData) );
        this.itemToAdd.emit(listItemData[0]);
        this.timestamp.push(Date.now())
        console.log('Timestamp updated to ' + this.timestamp);

    }

    compareId(item1: ListItemData, item2: ListItemData) {
        return item1.id === item2.id;
    }

}


