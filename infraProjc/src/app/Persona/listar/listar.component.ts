import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { PersonaService } from 'src/app/Services/persona.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonaService } from '../persona.service';
//MODELOS propios

import { Persona } from 'src/app/Modelo/persona';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  
  public personas:Persona[] =[];
  constructor(private service:PersonaService){}
  
  ngOnInit(): void {
    //   this.personas= this.service.getAll();
      this.service.getAll().subscribe((data: Persona[])=>{
        this.personas=data;
       // console.log(this.personas);
        }
    )
  }
}
