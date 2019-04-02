import { AuthenticationService } from '../services/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(private as: AuthenticationService, private router: Router) { }

  canActivate(): Observable<boolean>{
    return this.as.getUser().pipe(map(user => {
      if (user) {
        return true;
      }
      this.router.navigate(['']);
      return false;
    }));
  }

}
