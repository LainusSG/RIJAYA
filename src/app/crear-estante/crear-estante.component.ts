import { Component } from '@angular/core';

import { CargarScriptsService } from '../cargar-scripts.service';

@Component({
  selector: 'app-crear-estante',
  imports: [],
  standalone: true,
  templateUrl: './crear-estante.component.html',
  styleUrl: './crear-estante.component.css'
})
export class CrearEstanteComponent {

  constructor ( private _CargaScripts:CargarScriptsService)
  {
    _CargaScripts.Carga(["table"]);
  }

}
