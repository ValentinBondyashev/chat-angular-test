import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '@env/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user) {
    return this.http.post(environment.http.api + environment.http.user + environment.http.login, user);
  }
}
