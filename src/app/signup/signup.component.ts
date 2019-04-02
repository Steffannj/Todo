import { Router } from '@angular/router';
import { User } from './../models/user';
import { AuthenticationService } from './../services/authentication.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private signupForm: FormGroup;
  private error: string;

  constructor(private formBuilder: FormBuilder, private as: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, this.validEmail]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeatedPassword: ['', [Validators.required, this.isEqualPassword.bind(this)]]
    });
  }

  onSubmit() {
    this.as.registerUser(this.signupForm.value)
      .then(res => this.router.navigate(['home']))
      .catch(error => this.error = error);
  }

  validEmail(control: FormControl) {
    if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return { invalidEmail: true };
    }
  }

  isEqualPassword(control: FormControl) {
    if (!this.signupForm) {
      return { paswordsNotMatch: true };
    }
    if (control.value !== this.signupForm.controls['password'].value) {
      return { passwordsNotMatch: true };
    }
  }

}
