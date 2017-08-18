import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService,
              private _router: Router) { }

  ngOnInit() {
    console.log('statusL', this._authService.isLogged);
  }

  login(email: string, password: string) {
    this._authService.login();
    console.log('statusL', this._authService.isLogged);
    //this._router.navigateByUrl('/');
    //console.log('email', email, 'pass', password);
    return false;
  }
}
