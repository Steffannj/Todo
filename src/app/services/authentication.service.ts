import { User } from './../models/user';
import { Injectable } from '@angular/core';

declare var firebase;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  async signupUser(user: User) {
    await firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
      throw "Invalid credentials";
    });
  }

  async loginUser(user: User) {
    await firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function (error) {
      throw "Invalid credentials";
    });
  }

  logoutUser(){
    firebase.auth().signOut();
  }

   isAuthenticated() {
    var user = firebase.auth().currentUser;
    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
