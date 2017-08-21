import { Component, OnInit } from '@angular/core';
import { AuthorClass } from '../../../classes/AuthorClass';
import { GenreClass } from '../../../classes/GenreClass';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from '../../../services/author.service';
import { GenreService } from '../../../services/genre.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  reactiveForm: FormGroup;
  name: string;
  lastName: string;
  penName: string;
  genre: number[];
  titleAlert = 'This field is required';

  authors: AuthorClass[];
  genres: GenreClass[];

  constructor(private _authorService: AuthorService,
              private _router: Router,
              private _formBuilder: FormBuilder,
              private _genreService: GenreService) {
    this.reactiveForm = _formBuilder.group({
      'name': [null, Validators.required],
      'lastName': [null, Validators.required],
      'penName': [null, Validators.required],
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
  }

  addAuthor(post) {
    this.name = post.name;
    this.lastName = post.lastName;
    this.penName = post.penName;
    this.genre = [1];
    const newAuthor: AuthorClass = new AuthorClass(this.name, this.lastName, this.penName, this.genre);
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
