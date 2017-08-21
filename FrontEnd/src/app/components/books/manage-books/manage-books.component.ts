import { Component, OnInit } from '@angular/core';
import { BookClass } from '../../../classes/BookClass';
import { BookService } from '../../../services/book.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.css']
})
export class ManageBooksComponent implements OnInit {

  isLogged: boolean;

  books: BookClass[];
  genres: number[];

  constructor(private _bookService: BookService,
              private _authService: AuthService,
              private _router: Router) { }

  ngOnInit() {
    this.isLogged = this._authService.isLogged;
    this._bookService.getBooks()
      .subscribe(
        (books: BookClass[]) => {
          this.books = books.map((book: BookClass) => {
            this.genres = book.genres.map((genre: number) => {
              return genre;
            });
            return book;
          });
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }

  editBook(book: BookClass) {
    this._router.navigateByUrl('editBook');
    return false;
  }

  deleteBook(book: BookClass) {
    const index = this.books.indexOf(book);
    this._bookService.deleteBook(book)
      .subscribe(
        res => {
          this.books.splice(index, 1);
          console.log('Response:', res);
        },
        err => {
          console.log('Error', err);
        }
      );
    return false;
  }
}
