import { Component, OnInit } from '@angular/core';
import { UserClass } from '../../classes/UserClass';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user: UserClass = new UserClass('');

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
  }

  addUser(a:NgForm) {
    const newUser: UserClass = new UserClass(a.value.username, a.value.email,a.value.password);
    this._userService.create(newUser)
      .subscribe(
        res => {
          console.log('Response', res.text());
          this._router.navigateByUrl('confirmation');
        },
        err => {
          console.log('Error en el sign in: ', err.text());
        });
    return false;
  }
}
