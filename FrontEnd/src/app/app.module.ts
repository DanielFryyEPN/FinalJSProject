import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RoutesModule } from './routes';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MasterUrlService } from './services/master-url.service';
import { UserService } from './services/user.service';
import { BookService } from './services/book.service';
import { HttpModule } from '@angular/http';
import { BooksComponent } from './components/books/books.component';
import { AuthorsComponent } from './components/authors/authors.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SignInComponent,
    BooksComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutesModule
  ],
  providers: [
    MasterUrlService,
    UserService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
