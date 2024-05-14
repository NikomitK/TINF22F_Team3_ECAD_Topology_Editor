import { Component, Input, input } from '@angular/core';
import { ModelListComponent } from '../model-list/model-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgForOf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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
  @Input()
  topologyItems: any[] = [];

  @Input()
  timestamp: number[] = [];

  constructor() {}

  del(event: any) {
    const button = event.target;
    const id = button.id;
    const element = document.getElementById(id);
    if (element) {
      element.remove();
    }
  }
}
