import { Point } from "@angular/cdk/drag-drop";

export interface TopologyItem {
    id: number, 
    content: any, 
    position: Point
}