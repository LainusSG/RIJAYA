import { Routes } from '@angular/router';


import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';


import { Login2Component } from './login2/login2.component';
import { Usuario2Component } from './usuario2/usuario2.component';

export const routes: Routes = [
    { path: '', component: Login2Component },
    { path: 'home', component: InicioComponent },
    { path: 'usuarios', component: Usuario2Component },
    { path: 'usuario', component: UsuarioComponent },
];
