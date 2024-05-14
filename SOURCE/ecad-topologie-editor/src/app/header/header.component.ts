import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ete-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  @Output() itemSearched = new EventEmitter<string>()

  servers: string[] = ['test', 'test2', 'test3']
  
  filter: string = '';
  
  searchItem(){
    this.itemSearched.emit(this.filter);
  }


}
