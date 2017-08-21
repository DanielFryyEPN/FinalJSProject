import { Component, OnInit } from '@angular/core';
import { GenreClass } from '../../classes/GenreClass';
import { GenreService } from '../../services/genre.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: GenreClass[];

  constructor(private _genreService: GenreService) { }

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

}
