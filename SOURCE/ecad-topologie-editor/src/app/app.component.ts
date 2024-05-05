import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ModelListComponent } from './model-list/model-list.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { ListItemData } from './shared/list-item-data';
import { AasServiceService } from './shared/aas-service.service';
import { filter } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        HeaderComponent,
        ModelListComponent,
        DetailedViewComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

    title = 'ecad-topologie-editor';

    shownModel: ListItemData = {
        id: 1,
        name: 'First Item',
        description: 'This is the first demo item',
        price: 10,
        quantity: 1
    };

    itemList: ListItemData[] = [];

    switchShownModel(listItemData: ListItemData) {
        this.shownModel = listItemData;
    }
    
    filterItems(filter: string) {
        this.itemList = this.service.getItems(filter);
    }

    constructor(private service: AasServiceService){
        this.filterItems('');
    }

    
}
