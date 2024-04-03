import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ModelListComponent } from './model-list/model-list.component';
import { TopologyEditorComponent } from './topology-editor/topology-editor.component';
import { ListItemData } from './shared/list-item-data';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, ModelListComponent, TopologyEditorComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'ecad-topologie-editor';

    editorMode = true;

    shownModel: ListItemData = {
        id: 1,
        name: 'First Item',
        description: 'This is the first demo item',
        price: 10,
        quantity: 1
    };

    switchShownModel(listItemData: ListItemData) {
        this.shownModel = listItemData;
    }
}
