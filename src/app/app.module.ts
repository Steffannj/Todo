import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
var config = {
  apiKey: "AIzaSyA7CurNh-oTbCSlGUYZG2Wh_kepnslLps0",
  authDomain: "auth-bd6c6.firebaseapp.com",
  databaseURL: "https://auth-bd6c6.firebaseio.com",
  projectId: "auth-bd6c6",
  storageBucket: "auth-bd6c6.appspot.com",
  messagingSenderId: "256542472356"
};
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
