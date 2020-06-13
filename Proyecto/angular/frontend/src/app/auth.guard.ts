import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(
  private AuthService:AuthService,
  private router:Router)
  {}

  canActivate()
  {
    if (this.AuthService.loggedIn())
    return true //si la funcion loggedIn retorna true canactivate tambien.
    this.router.navigate(['/login']); // sino redirect signin y retornara false.
    return false;
  }
  
}
