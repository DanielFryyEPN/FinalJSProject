import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TokenService } from './services/token.service';
import { MasterUrlService } from './services/master-url.service';
import { AuthService } from './services/auth.service';
import { IsLoggedService } from './services/is-logged.service';
import { UserService } from './services/user.service';
import { BookService } from './services/book.service';
import { AuthorService } from './services/author.service';
import { GenreService } from './services/genre.service';

import { RoutesModule } from './routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
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
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SignInComponent,
    ConfirmationComponent,
    BooksComponent,
    AddBookComponent,
    EditBookComponent,
    ManageBooksComponent,
    AuthorsComponent,
    AddAuthorComponent,
    EditAuthorComponent,
    ManageAuthorsComponent,
    GenresComponent,
    AddGenreComponent,
    EditGenreComponent,
    ManageGenresComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TokenService,
    MasterUrlService,
    AuthService,
    IsLoggedService,
    UserService,
    BookService,
    AuthorService,
    GenreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
