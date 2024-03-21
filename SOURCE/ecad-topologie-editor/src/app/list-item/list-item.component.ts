import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ListItemData } from '../shared/list-item-data';

@Component({
  selector: 'ete-list-item',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {  
  @Input()
  item?: ListItemData;
}
