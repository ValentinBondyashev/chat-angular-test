import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as contactAction from '@action/contact.actions';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ContactService } from '@service/contact';


@Injectable()
export class ContactEffect {

  constructor(private actions$: Actions,
              private http: ContactService) {
  }

  @Effect()
  getAllContactsById$: Observable<Action> = this.actions$.pipe(
    ofType(contactAction.ActionTypes.GET_ALL_CONTACTS_REQUEST),
    switchMap(() => {
      return this.http.getAllContactsById()
        .pipe(
          map((data) => {
            return new contactAction.GetAllContactsByIdSuccess({contacts: data});
          }),
          catchError(error =>
            observableOf(new contactAction.GetAllContactsByIdFailure({error}))
          )
        );
    })
  );

  @Effect()
  addContacts$: Observable<Action> = this.actions$.pipe(
    ofType(contactAction.ActionTypes.ADD_CONTACTS_REQUEST),
    switchMap((action: any) => {
      return this.http.addContacts(action.payload.contacts)
        .pipe(
          map((data) => {
            return new contactAction.AddContactsSuccess({contacts: data});
          }),
          catchError(error =>
            observableOf(new contactAction.AddContactsFailure({error}))
          )
        );
    })
  );
}

