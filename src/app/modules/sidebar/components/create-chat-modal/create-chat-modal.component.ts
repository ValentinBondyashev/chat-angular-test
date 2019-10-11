import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { getUserState } from '@reducer/index';
import * as userAction from '@action/user.actions';
import { IAppState } from '@state/index';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-chat-modal',
  templateUrl: './create-chat-modal.component.html',
  styleUrls: ['./create-chat-modal.component.scss']
})
export class CreateChatModalComponent implements OnInit {
  private userState;
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
    this.store.dispatch(new userAction.GetAllUsersRequest());
    this.userState = this.store.pipe(select((getUserState))).subscribe((data) => {
      this.users = data.users;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    console.log(this.newChatForm.value);
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
