import { Component, OnInit } from '@angular/core';

import { PersonaService } from '../persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { Persona } from 'src/app/Modelo/persona';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {

  id!: number;
  persona!: Persona;
  form!: FormGroup;

  constructor(
    public personService: PersonaService,
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params);
    this.personService.find(this.id).subscribe((data: Persona)=>{
      this.persona = data;
      console.log( data.id);
    });

  }



}
