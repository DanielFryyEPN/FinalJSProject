import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MasterUrlService } from './master-url.service';
import 'rxjs/add/operator/map';
import { UserClass } from '../classes/UserClass';

@Injectable()
export class UserService {
  url: string;
  model: 'User';
  constructor(private _http: Http, private _masterUrlService: MasterUrlService) {
    console.log('la url del servicio es:', this._masterUrlService.url);
    console.log('el modelo en el user es:', this.model);
    this.url = this._masterUrlService.url + this.model;
    console.log('en el constructor la url es:', this.url);
  }
  create(user: UserClass) {
    const data = {
      username: user.username,
      email: user.email,
      password: user.password
    };
    console.log('la url es', this.url);
    return this._http.post('http://localhost:1337/User', data).map(res => res.json());
  }
}
