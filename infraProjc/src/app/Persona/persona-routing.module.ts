import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

import { VerComponent } from './ver/ver.component';  

const routes: Routes = [
  
  { path: 'personas', redirectTo: 'personas/listar', pathMatch: 'full'},
  { path: 'personas', component: ListarComponent },
  { path: 'personas/add', component: AddComponent },
  { path: 'personas/edit/:id', component: EditComponent },
  { path: 'personas/ver/:id', component: VerComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PersonaRoutingModule { }
