import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private as: AuthenticationService) { }

  ngOnInit() {
    this.isAuth();
  }

  isAuth() {
    return this.as.isAuthenticated();
  }

  logoutUser(){
    this.as.logoutUser();
  }

}
