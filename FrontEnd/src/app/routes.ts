import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { BooksComponent } from './components/books/books.component';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { EditBookComponent } from './components/books/edit-book/edit-book.component';
import { ManageBooksComponent } from './components/books/manage-books/manage-books.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AddAuthorComponent } from './components/authors/add-author/add-author.component';
import { EditAuthorComponent } from './components/authors/edit-author/edit-author.component';
import { ManageAuthorsComponent } from './components/authors/manage-authors/manage-authors.component';
import { GenresComponent } from './components/genres/genres.component';
import { AddGenreComponent } from './components/genres/add-genre/add-genre.component';
import { EditGenreComponent } from './components/genres/edit-genre/edit-genre.component';
import { ManageGenresComponent } from './components/genres/manage-genres/manage-genres.component';
import { IsLoggedService } from './services/is-logged.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'confirmation', component: ConfirmationComponent},
  {path: 'books', component: BooksComponent},
  {path: 'addBook', component: AddBookComponent, canActivate: [IsLoggedService]},
  {path: 'editBook', component: EditBookComponent, canActivate: [IsLoggedService]},
  {path: 'manageBooks', component: ManageBooksComponent, canActivate: [IsLoggedService]},
  {path: 'authors', component: AuthorsComponent},
  {path: 'addAuthor', component: AddAuthorComponent, canActivate: [IsLoggedService]},
  {path: 'editAuthor', component: EditAuthorComponent, canActivate: [IsLoggedService]},
  {path: 'manageAuthors', component: ManageAuthorsComponent, canActivate: [IsLoggedService]},
  {path: 'genres', component: GenresComponent},
  {path: 'addGenre', component: AddGenreComponent, canActivate: [IsLoggedService]},
  {path: 'editGenre', component: EditGenreComponent, canActivate: [IsLoggedService]},
  {path: 'manageGenres', component: ManageGenresComponent, canActivate: [IsLoggedService]},
];

export const RoutesModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
