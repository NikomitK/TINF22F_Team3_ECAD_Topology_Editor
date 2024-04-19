import { Component } from '@angular/core';
import { ModelListComponent } from '../model-list/model-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@Component({
    selector: 'ete-topology-editor',
    standalone: true,
    imports: [ModelListComponent, DragDropModule],
    templateUrl: './topology-editor.component.html',
    styleUrl: './topology-editor.component.scss'
})

export class TopologyEditorComponent {

    topologyItems = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
        { id: 6, name: 'Item 6' },
        { id: 7, name: 'Item 7' }
    ];
    
    constructor() {

    }

}
