import { Component, OnInit } from '@angular/core';
import { GenreClass } from '../../../classes/GenreClass';
import { GenreService } from '../../../services/genre.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  reactiveForm: FormGroup;
  name: string;
  id: number;
  titleAlert = 'This field is required';
  genre: GenreClass;

  constructor(private _genreService: GenreService,
              private _formBuilder: FormBuilder,
              private _router: Router) {
    this.reactiveForm = _formBuilder.group({
      'name': [null, Validators.compose([Validators.required, Validators.pattern(/[a-zA-Z]+/)])],
      'id': ''
    });
  }

  ngOnInit() {
    this.genre = this._genreService.genreToEdit;
  }

  editGenre(post) {
    this.id = post.id;
    this.name = post.name;
    const genre: GenreClass = new GenreClass(this.name, this.id);
    this._genreService.updateGenre(genre)
      .subscribe(
        res => {
          console.log('Response', res);
          this._router.navigateByUrl('manageGenres');
        },
        err => {
          console.log('Error en el sign in: ', err);
        });
    return false;
  }

}
