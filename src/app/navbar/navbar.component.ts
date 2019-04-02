import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   private currentUser;

  constructor(private as: AuthenticationService, private router: Router) {
    }

   ngOnInit() {
    this.as.getUser().subscribe(user=>{
      this.currentUser = user;
    });
  }

   logoutUser() {
     this.as.logout();
     this.currentUser = null;
  }

}
