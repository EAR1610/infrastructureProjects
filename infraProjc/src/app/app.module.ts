import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { EditComponent } from './Persona/edit/edit.component';
import { AddComponent } from './Persona/add/add.component';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule}from '@angular/forms'

import { PersonaService } from './Persona/persona.service';
import { PersonaModule } from './Persona/persona.module';
import { VerComponent } from './Persona/ver/ver.component';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonaModule,
    HttpClientModule,
    //NgbModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

