import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAppState } from '@state/index';
import * as authAction from '@action/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  public registerForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.email),
    password: new FormControl('',
      [Validators.minLength(8), Validators.maxLength(15),
        Validators.pattern(new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])'))])
  });

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit() {
  }

  submit() {
    this.store.dispatch(new authAction.Login(this.loginForm.value));
  }

}
