import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { VerComponent } from './Persona/ver/ver.component';
import { UsuarioRoutingModule } from './usuario/usuario-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path:'personas',component:ListarComponent},  
  {path:'personas/add',component:AddComponent},
  {path:'personas/edit/:id',component:EditComponent},
  {path:'personas/ver/:id',component:VerComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes),
    UsuarioRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
