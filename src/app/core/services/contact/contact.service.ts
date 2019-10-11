import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly headers;
  private readonly token;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
    this.headers = new HttpHeaders({Authorization: `Token ${this.token}`});
  }

  getAllContactsById() {
    return this.http.get(environment.serverUrl + environment.contact + '/all', {headers: this.headers});
  }
}
