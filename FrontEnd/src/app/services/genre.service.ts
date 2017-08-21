import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MasterUrlService } from './master-url.service';
import 'rxjs/add/operator/map';
import { GenreClass } from '../classes/GenreClass';

@Injectable()
export class GenreService {

  url: string;
  model = 'Genre';
  genreToEdit: GenreClass;

  constructor(private _http: Http, private _masterUrlService: MasterUrlService) {
    this.url = this._masterUrlService.url + this.model;
  }

  createGenre(genre: GenreClass) {
    const method = '/create';
    const data = {
      name: genre.name
    };
    return this._http.post(this.url + method, data).map(res => res.json());
  }

  deleteGenre(genre: GenreClass) {
    return this._http.delete(this.url + '/' + genre.id).map(res => res.json());
  }

  updateGenre(genre: GenreClass) {
    const method = '/update';
    const data = {
      name: genre.name
    };
    return this._http.put(this.url + method + '/' + genre.id, data).map(res => res.json());
  }

  getGenres() {
    return this._http.get(this.url).map(res => res.json());
  }
}
