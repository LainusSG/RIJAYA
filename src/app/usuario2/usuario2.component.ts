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
import { MatSort } from '@angular/material/sort';

import { DarkModeService } from 'angular-dark-mode';


export interface Nombres {
  name: string;
}




@Component({
  selector: 'app-usuario2',
  standalone: true,
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


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create 100 users
  

    // Assign the data to the data source for the table to render
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


/** Builds and returns a new User. */

  ELEMENT_DATA: Nombres[] = [
    {name: 'Casimiro Gómez González'},
    {name: 'Juana Cruz Hernández'},
    {name: 'José Lino Santos García'},
    {name: 'Tonatiuh Guzmán Aburto'},
    {name: 'Munera Gomez Libardo'},
    {name: 'Jaramillo Jaramillo Lina Marcela'},
    {name: 'Sierra Ramírez Nohemí'},
    {name: 'Ballesteros Muñoz Liliana Del Rosario'},
    {name: 'Sisa Luz Esmeralda'},
    {name: 'Gonzalez Gomez Luz Angela'},
    {name: 'Hernandez Uribe Aura Janneth'},
    {name: 'Rubio Jaramillo Luis Fernando'},
    {name: 'Lopera Piedrahita Edwin Fernney'},
    
  
  ];

  displayedColumns:  string[] = ['name','boton','icon'];
  dataSource = new MatTableDataSource<Nombres>(this.ELEMENT_DATA);
  
  remove(index: number) {
    const deleteItem = confirm("¿Estás seguro de borrar este usuario?");
    if (deleteItem) {
      const data = this.dataSource.data;
      data.splice(
        this.paginator.pageIndex * this.paginator.pageSize + index,
        1
      );
      this.dataSource.data = data;
    }
  }




}


