import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

import { VerComponent } from './ver/ver.component';  

const routes: Routes = [
  { path: 'persona', redirectTo: 'persona/index', pathMatch: 'full'},
  { path: 'persona/listar', component: ListarComponent },
  { path: 'persona/add', component: AddComponent },
  { path: 'persona/edit/:id', component: EditComponent },
  { path: 'persona/ver/:id', component: VerComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PersonaRoutingModule { }
