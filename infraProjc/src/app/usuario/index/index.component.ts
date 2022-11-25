import { Component, OnDestroy, OnInit } from '@angular/core';

import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { Subject } from 'rxjs';
import { LanguageApp } from 'src/app/Modelo/LanguageApp';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnDestroy,  OnInit {
  dtOptions: DataTables.Settings = {};
  usuarios: Usuario[] = [];
  dtTrigger: Subject<any> = new Subject<any>();// la funcion next lleva void 0 .next(void 0)
  // constructor() { }
  constructor(public service: UsuarioService) { }
 

  ngOnInit(): void {
        
    this.dtOptions = {
      language: LanguageApp.spanish_datatables,
      pagingType: 'full_numbers',
      pageLength: 10
    };
    
    this.service.getAll().subscribe((data: Usuario[])=>{
      this.usuarios = data;
      this.dtTrigger.next(void 0);// PARA que renderize la tabla

     // console.log(this.usuarios);// VER USUARIOS EN CONSOLA
    })
  }

  deleteUsuario(id:number){
    this.service.delete(id).subscribe(res => {
         this.usuarios = this.usuarios.filter(item => item.id !== id);
         console.log('Usuario eliminado successfully!');
    })
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
}

}