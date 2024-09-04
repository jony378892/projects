import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  private _loggedIn: boolean = false;

  get loggedIn(): boolean {
    return this._loggedIn;
  }

  set loggedIn(value: boolean) {
    this._loggedIn = value;
  }
}
