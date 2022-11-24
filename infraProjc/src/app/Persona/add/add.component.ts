
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
      name:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      email: new FormControl('', [ Validators.required, Validators.email ]),
      phone: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ])
    });
​
  }
​
  get f(){
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