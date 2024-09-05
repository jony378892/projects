import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  loggedIn: boolean = false;
  loggedInAdmin: boolean = false;
}
