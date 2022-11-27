import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ReadComponent } from './read/read.component';  

const routes: Routes = [
  { path: 'usuarios', redirectTo: 'usuarios', pathMatch: 'full'},
  { path: 'usuarios', component: IndexComponent },
  { path: 'usuarios/create', component: CreateComponent },
  { path: 'usuarios/edit/:id', component: EditComponent },
  { path: 'usuarios/read/:id', component: ReadComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
