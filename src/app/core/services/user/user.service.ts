import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly headers;
  private readonly token;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
    this.headers = new HttpHeaders({Authorization: `Token ${this.token}`});
  }

  getAllUser() {
    return this.http.get(environment.serverUrl + environment.user, {headers: this.headers});
  }

}
