import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ListarComponent } from './listar/listar.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { PersonaRoutingModule } from './persona-routing.module';


@NgModule({
  declarations: [
    ListarComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    PersonaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PersonaModule { }
