import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {
  chats = [{user: {status: 'active', avatar: false, first_name: 'Valentin', last_name: 'Bondyashev'}, last_message: '9/6/2019'},
    {user: {status: 'do-not-disturb', avatar: false, first_name: 'Max', last_name: 'Lebedev'}, last_message: '9/6/2019'},
    {user: {status: 'away', avatar: false, first_name: 'Egor', last_name: 'Hromov'}, last_message: '9/6/2019'},
    {user: {status: 'do-not-disturb', avatar: false, first_name: 'Bogdan', last_name: 'Ostapenko'}, last_message: '9/6/2019'}];

  constructor() {
  }

  ngOnInit() {
  }

}
