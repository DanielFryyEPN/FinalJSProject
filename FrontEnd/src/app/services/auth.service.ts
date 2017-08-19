import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MasterUrlService } from './master-url.service';
import { TokenService } from './token.service';
//import {Subject} from  "rxjs/Subject"


@Injectable()
export class AuthService {

  url: string;
  model = 'Auth';
  //logged$ = new Subject();

  isLogged = false;

  constructor(private _http: Http,
              private _masterUrl: MasterUrlService,
              private _tokenService: TokenService) {
    this.url = this._masterUrl + this.model;
  }

  login(email: string, password: string) {
    /*const method = '/login';
    const data = {
      email,
      password
    };
    this._http.post(this.url + method, data)
      .subscribe(
        res => {
          this._tokenService.token = res.text();
          this.isLogged = true;
        },
        err => {
          console.log('Error', err);
        }
      );*/
    this.isLogged = true;
  }

  logout() {
    this.isLogged = false;
  }
}
