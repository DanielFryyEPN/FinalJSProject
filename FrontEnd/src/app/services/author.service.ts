import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MasterUrlService } from './master-url.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthorService {

  url: string;
  model = 'Author';

  constructor(private _http: Http, private _masterUrlService: MasterUrlService) {
    this.url = this._masterUrlService.url + this.model;
  }

  getAuthors() {
    return this._http.get(this.url).map(res => res.json());
  }
}
