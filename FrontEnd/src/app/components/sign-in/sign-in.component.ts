import { Component, OnInit } from '@angular/core';
import { UserClass } from '../../classes/UserClass';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  users: UserClass[];
  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
    this._userService.getUsers()
      .subscribe(
        (users: UserClass[]) => {
          this.users = users.map((user: UserClass) => {
            return user;
          });
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }

  addUser(username: string, email: string, password: string) {
    const newUser: UserClass = new UserClass(username, email, password);
    this._userService.create(newUser)
      .subscribe(
        (createdUser: UserClass) => {
          console.log('Created user');
          this.users.push(createdUser);
          this._router.navigateByUrl('confirmation');
        },
        (error) => {
          console.log('Error en el sign in: ', error);
        });
    return false;
  }
}
