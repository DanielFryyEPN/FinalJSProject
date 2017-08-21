import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MasterUrlService } from './master-url.service';
import 'rxjs/add/operator/map';
import { BookClass } from '../classes/BookClass';

@Injectable()
export class BookService {

  url: string;
  model = 'Book';

  constructor(private _http: Http, private _masterUrlService: MasterUrlService) {
    this.url = this._masterUrlService.url + this.model;
  }

  createBook(book: BookClass) {
    const data = {
      isbn: book.isbn,
      title: book.title,
      publicationDate: book.publicationDate,
      author: book.author,
      genres: book.genres
    };
    return this._http.post(this.url, data).map(res => res.json());
  }

  deleteBook(book: BookClass) {
    return this._http.delete(this.url + '/' + book.isbn).map(res => res.json());
  }

  updateBook(book: BookClass) {
    const data = {
      title: book.title
    };
    return this._http.post(this.url + '/' + book.isbn, data).map(res => res.json());
  }

  getBooks() {
    return this._http.get(this.url).map(res => res.json());
  }

  getBookByIsbn(isbn: string) {
    return this._http.get(this.url + '?isbn=' + isbn).map(res => res.json());
  }
}
