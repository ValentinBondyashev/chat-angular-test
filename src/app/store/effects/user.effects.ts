import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as userAction from '@action/user.actions';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserService } from '@service/user';


@Injectable()
export class UserEffect {

  constructor(private actions$: Actions,
              private http: UserService) {
  }

  @Effect()
  getAllUser$: Observable<Action> = this.actions$.pipe(
    ofType(userAction.ActionTypes.GET_ALL_USERS_REQUEST),
    switchMap(() => {
      return this.http.getAllUser()
        .pipe(
          map((data) => {
            return new userAction.GetAllUsersSuccess({users: data});
          }),
          catchError(error =>
            observableOf(new userAction.GetAllUserFailure({error}))
          )
        );
    })
  );

  @Effect()
  getUsersWithFilter$: Observable<Action> = this.actions$.pipe(
    ofType(userAction.ActionTypes.GET_USERS_WITH_FILTER_REQUEST),
    switchMap((action: any) => {
      return this.http.getUsersWithFilter(action.payload.filter)
        .pipe(
          map((data) => {
            return new userAction.GetUsersWithFilterSuccess({users: data});
          }),
          catchError(error =>
            observableOf(new userAction.GetAllUserWithFilterFailure({error}))
          )
        );
    })
  );
}
