import { Component, OnInit } from '@angular/core';
import { BookClass } from '../../classes/BookClass';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: BookClass[];
  genres: number[];

  constructor(private _bookService: BookService) { }

  ngOnInit() {
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
}
