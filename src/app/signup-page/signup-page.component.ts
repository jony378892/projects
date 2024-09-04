import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent implements OnInit {
  userData: any[] = [];

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  ngOnInit(): void {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      this.userData = JSON.parse(savedData);
    }
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      this.userData.push(this.signUpForm.value);

      localStorage.setItem('signupData', JSON.stringify(this.userData));

      this.signUpForm.reset();
    }
  }
}
