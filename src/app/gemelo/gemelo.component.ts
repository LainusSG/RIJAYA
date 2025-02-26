import {ChangeDetectionStrategy, Component, OnInit, signal} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAccordion } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';


export interface nombres {
  name: string;
  id:number;
  img:string;
}



@Component({
  selector: 'app-gemelo',
  imports: [MatExpansionModule,
            MatFormFieldModule, 
            MatInputModule, 
            FormsModule, 
            MatButtonModule, 
            MatIconModule,
            ReactiveFormsModule,
            MatToolbarModule,
            MatAccordion,
            CommonModule,
            MatFormFieldModule,
            MatInputModule,
            
          ],
  templateUrl: './gemelo.component.html',
  styleUrl: './gemelo.component.css'
})
export class GemeloComponent implements OnInit{
  readonly panelOpenState = signal(false);
  
  valor = "";
  valores =2
  esterilizadores:any=[]
  

  ngOnInit(): void {
    
    this.esterilizadores= [
    {id:1, name: 'A', img:'https://previews.123rf.com/images/cherezoff/cherezoff2007/cherezoff200705667/151895846-dibujo-o-croquis-de-almac%C3%A9n-con-estantes.jpg'},
    {id:2, name: 'B', img:'https://static8.depositphotos.com/1548395/1008/i/450/depositphotos_10081109-stock-photo-scaffold.jpg'},
    {id:3, name: 'C', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTctFSHoFF-mhtfb-30FI2CpADVi6kMiEEP87SUq-76_lrptmH787bc7eRI5B17e2_PB4U&usqp=CAU'},    
    ];
  }

}
