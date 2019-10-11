import { Component, OnInit } from '@angular/core';
import { IAppState } from '@state/index';
import { select, Store } from '@ngrx/store';
import * as contactAction from '@action/contact.actions';
import { getContactState } from '@reducer/index';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  private contactState;
  contacts;

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new contactAction.GetAllContactsById());
    this.contactState = this.store.pipe(select((getContactState))).subscribe((data) => {
      this.contacts = data.contacts;
    });
  }

}
