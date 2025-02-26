import { RouterModule, Routes } from '@angular/router';


import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';


import { Login2Component } from './login2/login2.component';
import { Usuario2Component } from './usuario2/usuario2.component';

import { GemeloComponent } from './gemelo/gemelo.component';
import { CrearEstanteComponent } from './crear-estante/crear-estante.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    { path: '', component: Login2Component },

    
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'home', component: InicioComponent },
            { path: 'usuarios', component: Usuario2Component },
            { path: 'usuario', component: UsuarioComponent },
            { path: 'gemelo', component: GemeloComponent },
            { path: 'crear-estante', component: CrearEstanteComponent },
                  ]
      },
      
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }