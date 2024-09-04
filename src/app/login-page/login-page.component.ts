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
  constructor(private auth: AuthService) {}

  admin: boolean = false;
  loggedIn: boolean = false;
  changeAdminStatus() {
    this.admin = !this.admin;
  }

  loginForm: any = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    remember: new FormControl(''),
  });

  onSubmit() {
    this.auth.loggedIn = true;
  }
}
