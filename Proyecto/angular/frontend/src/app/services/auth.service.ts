import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = "http://localhost:3000";
  constructor(private http:HttpClient,
    private router:Router) 
  {

  }
  singUp(user) {
    return this.http.post(this.URL + '/registro', user);
  }
  singIn(user) {
    return this.http.post(this.URL + '/login', user);
  }
  loggedIn(){
    if (localStorage.getItem('token'))
    return true;
    else
    return false;
    // Podemos poner en su lugar return !! localStorage.getItem('token)
    //!! significa si existe return true si no return false.
  }
  getToken()
  {
    return localStorage.getItem('token');
  }
  logout()
  {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
