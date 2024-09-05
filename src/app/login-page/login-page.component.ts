import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NavbarComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  constructor(public auth: AuthService) {}

  loginForm: any = new FormGroup({
    email: new FormControl('jony@gmail.com', Validators.required),
    password: new FormControl('1234', Validators.required),
  });

  onSubmit() {
    const data = localStorage.getItem('signupData');
    if (data) {
      const userData = JSON.parse(data);
      if (
        userData.email == this.loginForm.get('email').value &&
        userData.password == this.loginForm.get('password').value
      ) {
        this.auth.loggedIn = true;
      } else {
        alert("Your email and password aren't matching");
      }
    } else {
      alert('You have to sign up first');
    }
  }
}
