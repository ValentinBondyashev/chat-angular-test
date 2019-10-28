import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment.prod';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private readonly headers;
  private readonly token;
  private roomId;

  constructor(private socket: Socket, private http: HttpClient, private route: ActivatedRoute) {
    this.token = localStorage.getItem('token');
    this.headers = new HttpHeaders({Authorization: `Token ${this.token}`});

    route.queryParams.subscribe(
      (queryParam: any) => {
        if (queryParam.id) {
          this.roomId = queryParam.id;
        }
      }
    );
  }

  sendChat(message) {
    this.socket.emit('chat', message);
  }

  receiveChat() {
    return this.socket.fromEvent('message');
  }

  getUsers() {
    return this.socket.fromEvent('users');
  }

  getAllChats() {
    return this.http.get(environment.serverUrl + environment.chat + '/all', {headers: this.headers});
  }

  addNewChat(data) {
    return this.http.post(environment.serverUrl + environment.chat, data.payload, {headers: this.headers});
  }

  getChat(id) {
    return this.http.get(environment.serverUrl + environment.chat + '/' + id, {headers: this.headers});
  }


  joinRoom(): void {
    this.socket.emit('join', this.roomId);
  }

  leaveRoom(roomId?: string): void {
    this.socket.emit('leave', roomId);
  }


  sendMessage(message): void {
    this.socket.emit('message', {message, room: this.roomId});
  }
}
