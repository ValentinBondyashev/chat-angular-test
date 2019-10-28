import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { getContactState } from '@reducer/index';
import * as chatAction from '@action/chat.actions';
import { IAppState } from '@state/index';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import * as contactAction from '@action/contact.actions';

@Component({
  selector: 'app-create-chat-modal',
  templateUrl: './create-chat-modal.component.html',
  styleUrls: ['./create-chat-modal.component.scss']
})
export class CreateChatModalComponent implements OnInit {
  private contactState;
  users;
  newChatForm;
  subscribers;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<IAppState>,
    public dialogRef: MatDialogRef<CreateChatModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    this.newChatForm = this.formBuilder.group({
      name: 'New Chat',
      subscribers: this.formBuilder.array([])
    });
  }

  ngOnInit() {
    this.store.dispatch(new contactAction.GetAllContactsById());
    this.contactState = this.store.pipe(select((getContactState))).subscribe((data) => {
      this.users = data.contacts;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    this.store.dispatch(new chatAction.AddNewChatRequest({
        name: this.newChatForm.value.name,
        users: this.newChatForm.value.subscribers
      }
    ));
  }

  createItem(item): FormGroup {
    return this.formBuilder.group({
      id: item.id,
    });
  }

  addItem(e): void {
    this.subscribers = this.newChatForm.get('subscribers') as FormArray;
    if (!e.checked) {
      let index = '';
      this.subscribers.value.forEach((item, indx) => {
        if (item.id === e.source.value.id) {
          index = indx;
        }
      });
      if (index !== '') {
        this.subscribers.removeAt(index);
      }
    } else {
      this.subscribers.push(this.createItem(e.source.value));
    }
  }

}
