import { Component, OnInit } from '@angular/core';
import { GenreClass } from '../../../classes/GenreClass';
import { GenreService } from '../../../services/genre.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {

  reactiveForm: FormGroup;
  name: string;
  titleAlert = 'This field is required';

  constructor(private _genreService: GenreService,
              private _formBuilder: FormBuilder,
              private _router: Router) {
    this.reactiveForm = _formBuilder.group({
      'name': [null, Validators.compose([Validators.required, Validators.pattern(/[a-zA-Z]+/)])]
    });
  }

  ngOnInit() {
  }

  addGenre(post) {
    this.name = post.name;
    const genre: GenreClass = new GenreClass(this.name);
    this._genreService.createGenre(genre)
      .subscribe(
        res => {
          console.log('Response', res);
          this._router.navigateByUrl('genres');
        },
        err => {
          console.log('Error en el sign in: ', err);
        });
    return false;
  }
}
