import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'infraProjc';
  faGoogle = faGoogle;

  constructor(private router:Router){}
  listar(){
    this.router.navigate(["personas"])
  }
  add(){
    this.router.navigate(["personas/add"])
  }
}
