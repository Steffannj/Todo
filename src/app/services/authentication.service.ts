import { map } from "rxjs/operators";
import { Router } from '@angular/router';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private afAuth: AngularFireAuth,
    private router: Router) {
  }

  registerUser(user: User) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(user.email, user.password)
        .then(userData => {
          userData.user.updateProfile({
            displayName: user.username
          }),
            resolve(userData)
        }
        ),
        rej => reject("invalid credentials");
    })
  }

  loginUser(user: User) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
        .then(userData => resolve(userData)
        ),
        rej => reject("Invalid crenedtials");
    })
  }

  getUser() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  logout() {
    this.router.navigate(['']);
    return this.afAuth.auth.signOut();
  }
}
