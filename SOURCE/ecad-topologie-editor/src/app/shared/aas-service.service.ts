import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as demoModel from '../../assets/Submodel_Documentation.json';

@Injectable({
  providedIn: 'root'
})
export class AasServiceService {

  constructor(http: HttpClient) { }

    getAasModel(): any {
        return demoModel
    }
}
