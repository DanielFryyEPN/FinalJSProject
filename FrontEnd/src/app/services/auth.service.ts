import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  isLogged = false;

  constructor() { }

  login() {
    this.isLogged = true;
    return this.isLogged;
  }

  logout() {
    this.isLogged = false;
    return this.isLogged;
  }
}
