import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { PersonaService } from 'src/app/Services/persona.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { PersonaService } from '../persona.service';
//MODELOS propios

import { Persona } from 'src/app/Modelo/persona';
import { LanguageApp } from 'src/app/Modelo/LanguageApp';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  public personas:Persona[] =[];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private service:PersonaService){}
  
  ngOnInit(): void {
    
    this.dtOptions = {
      language: LanguageApp.spanish_datatables,

      pagingType: 'full_numbers',
      pageLength: 10
    };
    
    //   this.personas= this.service.getAll();
      this.service.getAll().subscribe((data: Persona[])=>{
        this.personas=data;
       // console.log(this.personas);
       this.dtTrigger.next(void 0);

        }
    )
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
