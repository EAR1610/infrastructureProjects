import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { EditComponent } from './Persona/edit/edit.component';
import { AddComponent } from './Persona/add/add.component';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule}from '@angular/forms'
import { ServiceService } from '../app/Service/service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
