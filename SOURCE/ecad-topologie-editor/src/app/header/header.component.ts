import { Component, NgModule  } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';


interface server{
  value : string;
  viewValue : string;
}
@Component({
  selector: 'ete-header',
  standalone: true,
  imports: [MatToolbarModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  servers: server[] = [
    {
      value: '',
      viewValue: 'test',
    }
  ];
}
