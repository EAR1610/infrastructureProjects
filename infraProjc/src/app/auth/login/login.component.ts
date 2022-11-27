import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public service: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
   
   
      //password: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),// solo numeros
      usuario:  new FormControl('', [ Validators.required ]),
      password:  new FormControl('', [ Validators.required ]),

    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.service.authenticate(this.form.value).subscribe(res => {
         console.log('Person created successfully!');
         this.router.navigateByUrl('/');
    })
  }
}

