import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ModelListComponent } from './model-list/model-list.component';
import { TopologyEditorComponent } from './topology-editor/topology-editor.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';

import { ListItemData } from './shared/list-item-data';
import { AasServiceService } from './shared/aas-service.service';
import { TopologyItem } from './shared/topology-item';
import { Connection } from './shared/connection';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ModelListComponent,
    TopologyEditorComponent,
    DetailedViewComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  savedConnections : Connection[] = []
  
  title = 'ecad-topologie-editor';
  
  editorMode = false;

  shownModel: ListItemData = {
    id: 1,
    name: 'First Item',
    description: 'This is the first demo item',
    price: 10,
    quantity: 1,
  };

  itemList: ListItemData[] = [];
  idIncrementor: number = 0;

  switchShownModel(listItemData: ListItemData) {
    this.shownModel = listItemData;
  }
  addItemToEditor(listItemData: ListItemData) {
    this.topologyItems.push({id: this.idIncrementor++, content: listItemData, position: {x: 0, y: 0}});
  }

  removeItem(id: number) {
    this.topologyItems = this.topologyItems.filter((item) => item.id != id)
  }

  topologyItems: TopologyItem[] = [];

  filterItems(filter: string) {
    this.itemList = this.service.getItems(filter);
  }
  switchMode() {
    this.editorMode = !this.editorMode;
  }

  saveConnections(connections: Connection[]) {
    this.savedConnections = connections
  }

  constructor(private service: AasServiceService) {
    this.filterItems('');
  }
}
