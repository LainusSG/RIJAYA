import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CargarScriptsService } from './cargar-scripts.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
              
            ],
  providers:[CargarScriptsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent{
  title = 'RACSAPP';



}
