import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  private id!: number;
  usuario:  Usuario =new Usuario();

  constructor(
    public service: UsuarioService,
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];    
    this.service.find(this.id).subscribe((data: Usuario)=>{
      this.usuario = data;
    //  console.log( data); //VER DATOS EN CONSOLA
    });

  }



}
