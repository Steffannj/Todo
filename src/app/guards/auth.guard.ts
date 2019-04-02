import { map } from 'rxjs/operators';
import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private as: AuthenticationService, private afAuth: AngularFireAuth, private router: Router) { }

  canActivate(): Observable<boolean> | boolean {
    return this.as.getUser().pipe(map(user => {
      if (!user) {
        return true;
      }
      this.router.navigate(['home']);
      return false;
    }));
  }
}
