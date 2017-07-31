import { Component, OnInit } from '@angular/core';
import { BookClass } from '../../classes/BookClass';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: BookClass[];
  constructor(private _bookService: BookService) { }

  ngOnInit() {
    this._bookService.getBooks()
      .subscribe(
        (books: BookClass[]) => {
          this.books = books.map((book: BookClass) => {
            return book;
          });
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }
}
