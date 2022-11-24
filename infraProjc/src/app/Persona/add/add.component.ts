
import { Component, OnInit } from '@angular/core';

import { PersonaService } from '../persona.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
​
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
​
  public form!: FormGroup;
​
  constructor(
    public personService: PersonaService,
    private router: Router
  ) { }
​
  ngOnInit(): void {
​
    this.form = new FormGroup({
      nombre:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      apellido:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
    
    });
​
  }
​
  get f(){
   // console.log(this.form.get('nombre')?.errors);
   // console.log(this.form.controls);
    return this.form.controls;
    
    

  }
​
  submit(){
    console.log(this.form.value);
    this.personService.create(this.form.value).subscribe(res => {
         console.log('Person addd successfully!');
         this.router.navigateByUrl('person/index');
    })
  }
​
}
​