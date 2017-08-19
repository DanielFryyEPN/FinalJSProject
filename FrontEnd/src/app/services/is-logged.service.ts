import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class IsLoggedService implements CanActivate{

  constructor(private _authService: AuthService, private _router: Router) { }

  canActivate() {
    //console.log('Intentando entrar a la vista');
    if (this._authService.isLogged) {
      return true;
    } else {
      this._router.navigate(['login']);
      return false;
    }
  }
}
