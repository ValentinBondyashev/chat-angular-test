import { Component, Inject, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as userAction from '@action/user.actions';
import * as contactAction from '@action/contact.actions';
import { IAppState } from '@store/state';
import { CreateChatModalComponent } from '@module/sidebar/components/create-chat-modal/create-chat-modal.component';
import { getUserState } from '@reducer/index';

@Component({
  selector: 'app-create-contact-modal',
  templateUrl: './create-contact-modal.component.html',
  styleUrls: ['./create-contact-modal.component.scss']
})
export class CreateContactModalComponent implements OnInit {

  private contactState;
  users;
  form;
  subscribers;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<IAppState>,
    public dialogRef: MatDialogRef<CreateChatModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    this.form = this.formBuilder.group({
      name: '',
      subscribers: this.formBuilder.array([])
    });
  }

  ngOnInit() {
    this.store.dispatch(new userAction.GetAllUsersRequest());
    this.contactState = this.store.pipe(select((getUserState))).subscribe((data) => {
      this.users = data.users;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    this.store.dispatch(new contactAction.AddContacts({
        contacts: this.form.value.subscribers
      }
    ));
  }

  createItem(item): FormGroup {
    return this.formBuilder.group({
      id: item.id,
    });
  }

  addItem(e): void {
    this.subscribers = this.form.get('subscribers') as FormArray;
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

  handleInput(e) {
    setTimeout(() => {
      if (this.form.value.name === e && e !== '') {
        this.store.dispatch(new userAction.GetUsersWithFilterRequest({filter: this.form.value.name}));
      }
    }, 1000);
  }

}
