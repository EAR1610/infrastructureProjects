import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { VerComponent } from './Persona/ver/ver.component';
import { PersonaModule } from './Persona/persona.module';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path:'personas',component:ListarComponent},  
  {path:'personas/add',component:AddComponent},
  {path:'personas/edit/:id',component:EditComponent},
  {path:'personas/ver/:id',component:VerComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
