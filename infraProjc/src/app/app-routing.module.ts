import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { PersonaRoutingModule } from './Persona/persona-routing.module';
import { VerComponent } from './Persona/ver/ver.component';
import { UsuarioRoutingModule } from './usuario/usuario-routing.module';

const routes: Routes = [
  { path: '**', redirectTo: '/', pathMatch: 'full'},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes),
    UsuarioRoutingModule,
    PersonaRoutingModule,

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
