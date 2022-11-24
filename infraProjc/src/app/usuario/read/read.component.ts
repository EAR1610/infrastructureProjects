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

  id!: number;
  usuario!: Usuario;
  

  constructor(
    public service: UsuarioService,
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params);
    this.service.find(this.id).subscribe((data: Usuario)=>{
      this.usuario = data;
      console.log( data.id);
    });

  }



}
