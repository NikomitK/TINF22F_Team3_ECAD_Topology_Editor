import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CdkListboxModule, CdkListbox, CdkOption } from '@angular/cdk/listbox';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ListItemData } from '../shared/list-item-data';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
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
    MatButton,
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

    @Input()
    editormode!: boolean;

    selectItem(listItemData: readonly ListItemData[]): void {
        this.itemSelected.emit(listItemData[0]);
    }

    addModel(listItemData: readonly ListItemData[]) : void{
        this.currentItem = listItemData[0];
        this.itemToAdd.emit(listItemData[0]);
        this.timestamp.push(Date.now())
    }

    downloadModel(listItemData : readonly ListItemData[]) : void{
        const blob = new Blob([JSON.stringify(listItemData)], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }

    compareId(item1: ListItemData, item2: ListItemData) : boolean {
        return item1.id === item2.id;
    }
    
    getFontIcon(): string {
        return this.editormode ? 'arrow_forward' : 'download'
    }

}
