import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  _loggedIn: boolean = false;
  _loggedInAdmin: boolean = false;

  get loggedIn(): boolean {
    return this._loggedIn;
  }

  get loggedInAdmin(): boolean {
    return this._loggedInAdmin;
  }

  set loggedIn(value: boolean) {
    this._loggedIn = value;
  }
  set loggedInAdmin(value: boolean) {
    this._loggedInAdmin = value;
  }
}
