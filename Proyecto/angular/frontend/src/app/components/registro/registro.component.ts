import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user ={
    email:'',
    password: ''
  }
  constructor(
    private AuthService:AuthService,
    private router:Router,
    ) { }

  ngOnInit(): void {
  }
  signUp()
  {
    this.AuthService.singUp(this.user).subscribe(
      res => {
        localStorage.setItem('token',res['token']);
        this.router.navigate(['/private']);
      }, err => console.log(err)
    ); //suscribe maneja la respuesta del servidor
  }
}
