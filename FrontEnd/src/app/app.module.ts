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
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutesModule
  ],
  providers: [
    MasterUrlService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
