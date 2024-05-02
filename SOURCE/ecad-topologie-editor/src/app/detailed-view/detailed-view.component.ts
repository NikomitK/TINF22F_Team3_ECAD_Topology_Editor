import { Component, Input } from '@angular/core';
import { AasServiceService } from '../shared/aas-service.service';
import { ListItemData } from '../shared/list-item-data';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@Component({
  selector: 'ete-detailed-view',
  standalone: true,
  imports: [
    NgxJsonViewerModule,
  ],
  templateUrl: './detailed-view.component.html',
  styleUrl: './detailed-view.component.scss'
})
export class DetailedViewComponent {

  @Input() shownModel! : ListItemData 

    test: any;
    constructor(aasService: AasServiceService) { 
        this.test = aasService.getAasModel();
    }

}
