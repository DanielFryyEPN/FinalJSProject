import { Component, OnInit } from '@angular/core';
import { GenreClass } from '../../../classes/GenreClass';
import { GenreService } from '../../../services/genre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-genres',
  templateUrl: './manage-genres.component.html',
  styleUrls: ['./manage-genres.component.css']
})
export class ManageGenresComponent implements OnInit {

  genres: GenreClass[];

  constructor(private _genreService: GenreService,
              private _router: Router) { }

  ngOnInit() {
    this._genreService.getGenres()
      .subscribe(
        (genres: GenreClass[]) => {
          this.genres = genres.map((genre: GenreClass) => {
            return genre;
          });
        },
        (err) => {
          console.log('Error: ', err);
        }
      );
  }

  editGenre(genre: GenreClass) {
    this._genreService.genreToEdit = genre;
    this._router.navigateByUrl('editGenre');
    return false;
  }

  deleteGenre(genre: GenreClass) {
    const index = this.genres.indexOf(genre);
    this._genreService.deleteGenre(genre)
      .subscribe(
        res => {
          this.genres.splice(index, 1);
          console.log('Response:', res);
        },
        err => {
          console.log('Error', err);
        }
      );
    return false;
  }
}
