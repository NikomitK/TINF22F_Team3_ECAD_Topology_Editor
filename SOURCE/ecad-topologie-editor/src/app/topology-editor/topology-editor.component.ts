import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModelListComponent } from '../model-list/model-list.component';
import { DragDropModule, Point } from '@angular/cdk/drag-drop';
import { NgForOf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TopologyItem } from '../shared/topology-item';

@Component({
  selector: 'ete-topology-editor',
  standalone: true,
  imports: [
    ModelListComponent,
    DragDropModule,
    NgForOf,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './topology-editor.component.html',
  styleUrl: './topology-editor.component.scss',
})
export class TopologyEditorComponent {

  logDrop(distance: Point, topologyItem : TopologyItem) {
    topologyItem.position = { 
      x : topologyItem.position.x + distance.x, 
      y: topologyItem.position.y + distance.y
    } 
  }

  @Input()
  topologyItems: TopologyItem[] = [];

  @Output()
  itemRemoved: EventEmitter<number> = new EventEmitter<any>()

  constructor() {}

  removeItem(item: TopologyItem) {
    this.itemRemoved.emit(item.id);
  }
}
