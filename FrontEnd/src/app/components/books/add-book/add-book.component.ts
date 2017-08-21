import { Component, OnInit } from '@angular/core';
import { GenreClass } from '../../../classes/GenreClass';
import { BookClass } from '../../../classes/BookClass';
import { AuthorClass } from '../../../classes/AuthorClass';
import { BookService } from '../../../services/book.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenreService } from '../../../services/genre.service';
import { AuthorService } from '../../../services/author.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  reactiveForm: FormGroup;
  isbn: string;
  title: string;
  publicationDate: Date;
  author: number;
  genre: number[];
  titleAlert = 'This field is required';

  authors: AuthorClass[];
  genres: GenreClass[];

  constructor(private _bookService: BookService,
              private _router: Router,
              private _formBuilder: FormBuilder,
              private _genreService: GenreService,
              private _authorService: AuthorService) {
    this.reactiveForm = _formBuilder.group({
      'isbn': [null, Validators.required],
      'title': [null, Validators.required],
      'publicationDate': [null, Validators.compose([Validators.required, Validators.pattern(/[\d]{4}-[\d]{2}-[\d]{2}/)])],
      'author': '',
      'genre': ''
    });
  }

  ngOnInit() {
    this._genreService.getGenres()
      .subscribe(
        (genres: GenreClass[]) => {
          this.genres = genres.map((genre: GenreClass) => {
            return genre;
          });
        },
        (error) => {
          console.log('Error: ', error);
        }
      );

    this._authorService.getAuthors()
      .subscribe(
        (authors: AuthorClass[]) => {
          this.authors = authors.map((author: AuthorClass) => {
            return author;
          });
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }

  addBook(post) {
    this.isbn = post.isbn;
    this.title = post.title;
    this.publicationDate = post.publicationDate;
    console.log('author', post.author.name, 'genre', post.genre);
    this.author = 1;
    this.genre = [1];
    const newBook: BookClass = new BookClass(this.isbn, this.title, this.publicationDate, this.author, this.genre);
    /*this._bookService.createBook(newBook)
      .subscribe(
        res => {
          console.log('Response', res);
          this._router.navigateByUrl('/');
        },
        err => {
          console.log('Error en el sign in: ', err);
        });*/
    return false;
  }
}
