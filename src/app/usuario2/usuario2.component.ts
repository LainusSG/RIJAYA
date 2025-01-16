import {Component, ViewChild} from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import { FormsModule }   from '@angular/forms';


import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatPaginatorModule} from '@angular/material/paginator';


@Component({
  selector: 'app-usuario2',
  imports: [FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatTabsModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatPaginatorModule,

  ],
  templateUrl: './usuario2.component.html',
  styleUrl: './usuario2.component.css'
})
export class Usuario2Component {
  displayedColumns = ['name','boton','icon'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


export interface Element {
  name: string;
}

const ELEMENT_DATA: Element[] = [
  {name: 'Casimiro Gómez González'},
  {name: 'Juana Cruz Hernández'},
  {name: 'José Lino Santos García'},
 
];