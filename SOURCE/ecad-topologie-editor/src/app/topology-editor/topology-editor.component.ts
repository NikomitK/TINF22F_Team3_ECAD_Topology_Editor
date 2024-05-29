import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { ModelListComponent } from '../model-list/model-list.component';
import { DragDropModule, Point } from '@angular/cdk/drag-drop';
import { NgForOf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TopologyItem } from '../shared/topology-item';
import { Connection, Connector } from '../shared/connection';

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

export class TopologyEditorComponent implements AfterViewInit, OnDestroy {

  currentConnector: Connector | null = null

  logDrop(distance: Point, topologyItem: TopologyItem) {
    topologyItem.position = {
      x: topologyItem.position.x + distance.x,
      y: topologyItem.position.y + distance.y
    }
  }

  @Input()
  topologyItems: TopologyItem[] = [];

  @Output()
  itemRemoved: EventEmitter<number> = new EventEmitter<any>()

  constructor() { }

  removeItem(item: TopologyItem) {
    this.itemRemoved.emit(item.id);
    this.connections.filter((connection) => connection.end.itemId == item.id || connection.start.itemId == item.id).forEach((connection) => connection.leaderLine.remove())
    this.connections = this.connections.filter((connection) => !(connection.end.itemId == item.id || connection.start.itemId == item.id))
  }

  @Input()
  initialConnections: Connection[] = []

  @Output()
  saveConnections: EventEmitter<Connection[]> = new EventEmitter<Connection[]>

  connections: Connection[] = []

  draw(point: number, itemId: number) {
    const newConnector = {
      point: point,
      itemId: itemId,

    }
    if (this.currentConnector) {
      if (newConnector.itemId == this.currentConnector.itemId) {
        const remove = this.connections.filter(
          (connection) => (
            connectorEquals(connection.end, newConnector) ||
            connectorEquals(connection.start, newConnector) ||
            connectorEquals(connection.end, this.currentConnector) ||
            connectorEquals(connection.start, this.currentConnector)
          )
        )
        remove.forEach((connection) => connection.leaderLine.remove())
        this.connections = this.connections.filter(
          (connection) => !(
            connectorEquals(connection.end, newConnector) ||
            connectorEquals(connection.start, newConnector) ||
            connectorEquals(connection.end, this.currentConnector) ||
            connectorEquals(connection.start, this.currentConnector)
          ))
        this.currentConnector = null
      }
      else {

        const line = new LeaderLine(
          document.getElementById(itemId + '-' + point),
          document.getElementById(this.currentConnector.itemId + '-' + this.currentConnector.point),
          {
            startPlug: 'square', endPlug: 'square'
          }
        )

        const remove = this.connections.filter(
          (connection) => (
            connectorEquals(connection.end, newConnector) ||
            connectorEquals(connection.start, newConnector) ||
            connectorEquals(connection.end, this.currentConnector) ||
            connectorEquals(connection.start, this.currentConnector)
          )
        )

        remove.forEach((connection) => connection.leaderLine.remove())

        this.connections = this.connections.filter(
          (connection) => !(
            connectorEquals(connection.end, newConnector) ||
            connectorEquals(connection.start, newConnector) ||
            connectorEquals(connection.end, this.currentConnector) ||
            connectorEquals(connection.start, this.currentConnector)
          ))

        this.connections.push({
          start: newConnector,
          end: this.currentConnector,
          leaderLine: line
        })

        this.currentConnector = null
      }
    }
    else {
      this.currentConnector = newConnector
    }

  }

  redraw(itemId: number) {
    this.connections.filter((connection) => connection.end.itemId == itemId || connection.start.itemId == itemId).forEach((connection) => connection.leaderLine.position())
  }

  ngOnDestroy(): void {
    this.connections.forEach(connection => connection.leaderLine.remove())
    this.saveConnections.emit(this.connections)

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initialConnections.forEach(connection => connection.leaderLine = new LeaderLine(
        document.getElementById(connection.end.itemId + '-' + connection.end.point),
        document.getElementById(connection.start.itemId + '-' + connection.start.point),
        {
          startPlug: 'square', endPlug: 'square'
        }
      )
      )
    }, 100)
    this.connections = this.initialConnections
  }

}

function connectorEquals(a: Connector | null, b: Connector | null) {
  return a && b && (a.itemId == b.itemId) && (a.point == b.point)
}
