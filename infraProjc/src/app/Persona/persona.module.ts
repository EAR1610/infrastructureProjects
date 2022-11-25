import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaRoutingModule } from './persona-routing.module';

import { ListarComponent } from './listar/listar.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { VerComponent } from './ver/ver.component';  

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from "angular-datatables";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFilm, faFish } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';


@NgModule({
  declarations: [
    ListarComponent,
    AddComponent,
    EditComponent,
    VerComponent
  ],
  imports: [
    CommonModule,
    PersonaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    FontAwesomeModule,

  ]
})
export class PersonaModule { }
