import { Component, OnInit } from '@angular/core';

import { PersonaService } from '../persona.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Persona } from 'src/app/Modelo/persona';



@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})

export class VerComponent implements OnInit {
  constructor(
    
    public service: PersonaService,
    private route: ActivatedRoute,
    private router: Router,
    
    
  ) { }
 

  id!: number;
  persona: Persona =new Persona();
  /*
  {
    id: 0,
    nombre: "undefined",
    apellido: "undefined",
    created_at: new Date,
    updated_at: new Date
  };
  */
 

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params);
    this.service.find(this.id).subscribe((data: Persona)=>{
      this.persona = data;
      console.log( data);
    })

    
      
  }
  //forma de crear funciones scrip
  action(){
      
    this.router.navigate([ '/personas' ])
 }


}


