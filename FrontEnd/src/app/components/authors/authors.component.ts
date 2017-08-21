import { Component, OnInit } from '@angular/core';
import { AuthorClass } from '../../classes/AuthorClass';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors: AuthorClass[];

  constructor(private _authorService: AuthorService) { }

  ngOnInit() {
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
}
