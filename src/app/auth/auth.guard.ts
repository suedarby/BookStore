import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { AppComponent } from './../app.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private authService: AuthService) { }
  canActivate(){
return true;
    // return this.authService.isAuthenticated();
  }

}
