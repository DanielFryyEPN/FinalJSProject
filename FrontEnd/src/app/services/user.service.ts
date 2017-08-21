import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MasterUrlService } from './master-url.service';
import 'rxjs/add/operator/map';
import { UserClass } from '../classes/UserClass';

@Injectable()
export class UserService {
  url: string;
  model = 'User';
  constructor(private _http: Http, private _masterUrlService: MasterUrlService) {
    this.url = this._masterUrlService.url + this.model;
  }
  createUser(user: UserClass) {
    const method = '/create';
    const data = {
      username: user.username,
      email: user.email,
      password: user.password
    };
    return this._http.post(this.url + method, data);
  }
  deleteUser(user: UserClass) {
    return this._http.delete(this.url + '/' + user.id).map(res => res.json());
  }
  updateUser(user: UserClass) {
    const data = {
      username: user.username
    };
    return this._http.put(this.url + '/' + user.id, data).map(res => res.json());
  }
  getUsers() {
    return this._http.get(this.url).map(res => res.json());
  }
  getUserById(id: number) {
    return this._http.get(this.url + '?id=' + id).map(res => res.json());
  }
}
