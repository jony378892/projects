import { Component, OnInit } from '@angular/core';
import { LoginPageComponent } from '../login-page/login-page.component';
import { SignupPageComponent } from '../signup-page/signup-page.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    LoginPageComponent,
    SignupPageComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    console.log(this.auth.loggedIn);
  }
}
