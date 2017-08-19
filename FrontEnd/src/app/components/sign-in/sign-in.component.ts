import { Component, OnInit } from '@angular/core';
import { UserClass } from '../../classes/UserClass';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  reactiveForm: FormGroup;
  username = '';
  email = '';
  password = '';
  titleAlert = 'This field is required';

  user: UserClass = new UserClass('');

  constructor(private _userService: UserService,
              private _router: Router,
              private _formBuilder: FormBuilder) {
    this.reactiveForm = _formBuilder.group({
      'username': [null, Validators.required],
      'email': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(18)])]
    });
  }

  ngOnInit() {
  }

  addUser(post) {
    this.username = post.username;
    this.email = post.email;
    this.password = post.password;
    const newUser: UserClass = new UserClass(this.username, this.email, this.password);
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
