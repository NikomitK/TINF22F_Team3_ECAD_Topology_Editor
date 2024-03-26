import { Component } from '@angular/core';
import { AasServiceService } from '../shared/aas-service.service';

@Component({
  selector: 'ete-detailed-view',
  standalone: true,
  imports: [],
  templateUrl: './detailed-view.component.html',
  styleUrl: './detailed-view.component.scss'
})
export class DetailedViewComponent {
    test: any;
    constructor(aasService: AasServiceService) { 
        this.test = aasService.getAasModel();
        console.log(this.test);
    }
}
