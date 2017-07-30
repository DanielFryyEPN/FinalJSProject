import { Component, OnInit } from '@angular/core';
import { UserClass } from '../../classes/UserClass';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  addUser(username: string, email: string, password: string) {
    console.log(username, email, password);
    const newUser: UserClass = new UserClass(username, email, password);
    this._userService.create(newUser)
      .subscribe(
        (createdUser: UserClass) => {
          console.log('Usuario creado', createdUser);
        },
        (error) => {
          console.log('Error en el sign in: ', error, 'usuario', newUser);
        });
    return false;
  }
}
