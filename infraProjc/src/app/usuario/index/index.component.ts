import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  usuarios: Usuario[] = [];

  // constructor() { }
  constructor(public service: UsuarioService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data: Usuario[])=>{
      this.usuarios = data;
      console.log(this.usuarios);
    })
  }

  deletePerson(id:number){
    this.service.delete(id).subscribe(res => {
         this.usuarios = this.usuarios.filter(item => item.id !== id);
         console.log('Person deleted successfully!');
    })
  }

}