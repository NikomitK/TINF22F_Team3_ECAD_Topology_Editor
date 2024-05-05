import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CdkListboxModule, CdkListbox, CdkOption } from '@angular/cdk/listbox';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ListItemData } from '../shared/list-item-data';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'ete-model-list',
    standalone: true,
    imports: [
        CdkListboxModule,
        ScrollingModule,
        CdkListbox,
        CdkOption,
        MatCardModule
    ],
    templateUrl: './model-list.component.html',
    styleUrl: './model-list.component.scss',
})
export class ModelListComponent {
    @Output()
    itemSelected = new EventEmitter<ListItemData>();
    
    @Input() itemlist!: ListItemData[] 
    
    @Input() currentItem!: ListItemData
    
    selectItem(listItemData: readonly ListItemData[]) {
        this.itemSelected.emit(listItemData[0]);
    }

    compareId(item1: ListItemData, item2: ListItemData) {
        return item1.id === item2.id;
    }
}
