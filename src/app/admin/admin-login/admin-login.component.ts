import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss',
})
export class AdminLoginComponent {
  constructor(public auth: AuthService) {}

  loginForm: any = new FormGroup({
    email: new FormControl('jony@gmail.com', [Validators.required]),
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
        this.auth.loggedInAdmin = true;
      } else {
        alert("Your email and password aren't matching");
      }
    } else {
      alert('You have to sign up first');
    }
  }
}
