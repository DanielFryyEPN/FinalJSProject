import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged: boolean;

  constructor(private _authService: AuthService,
              private _router: Router) { }

  ngOnInit() {
    /*this._authService.logged$.subscribe(valor => {
      console.log(valor);
    });*/
    console.log('statusN', this._authService.isLogged);
    this.isLogged = this._authService.isLogged;
  }

  logout() {
    this._authService.logout();
    console.log('statusN', this._authService.isLogged);
    this._router.navigateByUrl('login');
    return false;
  }
}
