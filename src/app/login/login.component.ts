import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;
  private error: string;

  constructor(private formBuilder: FormBuilder, private as: AuthenticationService, private router: Router) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, this.validEmail]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    this.as.loginUser(this.loginForm.value)
      .then(res => this.router.navigate(['home']))
      .catch(error => this.error = error);
  }


  private validEmail(control: FormControl) {
    if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return { invalidEmail: true };
    }
  }
}
