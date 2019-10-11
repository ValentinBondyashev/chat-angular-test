#!/bin/sh
NAME_FILE="user"
SERVICE="UserService"
EFFECT="UserEffect"
ISTATE="IUserState"
ACTION="userAction"
INITIALSTATE="initialUserState"
REDUCER="reducerUser"
cd /home/smartit-23/Projects/Chat/front/src/app/store/actions
echo "import { Action } from '@ngrx/store';

export enum ActionTypes {

}

export class Example implements Action {
  readonly type = ActionTypes.EXAMPLE_TYPE_ACTION;

  constructor(public payload: {}) {
  }
}

export type Actions = Example;
" >> $NAME_FILE.actions.ts

echo "file $NAME_FILE.action.ts created"

cd /home/smartit-23/Projects/Chat/front/src/app/store/effects
echo "import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as $ACTION from '@action/$NAME_FILE.actions';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { $SERVICE } from '@service/$NAME_FILE';


@Injectable()
export class $EFFECT {

  constructor(private actions$: Actions,
              private http: $SERVICE) {
  }

  @Effect()
  example$: Observable<Action> = this.actions$.pipe(
    ofType($ACTION.ActionTypes.EXAMPLE),
    switchMap(() => {
      return this.http.example()
        .pipe(
          map((data) => {
            return new $ACTION.ExampleSuccess({data});
          }),
          catchError(error =>
            observableOf(new $ACTION.ExampleFailure({error}))
          )
        );
    })
  );
}" >> $NAME_FILE.effects.ts

echo "file $NAME_FILE.effects.ts created"

cd /home/smartit-23/Projects/Chat/front/src/app/store/reducers
echo "import * as $ACTION from '@action/$NAME_FILE.actions';
import { $ISTATE, $INITIALSTATE } from '@state/$NAME_FILE.state';

export function $REDUCER(state: $ISTATE = $INITIALSTATE, action: $ACTION.Actions) {
  switch (action.type) {
    case $ACTION.ActionTypes.EXAMPLE_REQUEST:
      return {
        ...state,
      };
    case $ACTION.ActionTypes.EXAMPLE_SUCCESS:
      return {
        ...state,
      };
    case $ACTION.ActionTypes.EXAMPLE_FAILURE:
      return {
        ...state,
        error: state.error
      };
    default:
      return state;
  }
}" >> "$NAME_FILE.reducers.ts"


echo "file $NAME_FILE.reducers.ts created"

cd /home/smartit-23/Projects/Chat/front/src/app/store/state
echo "export interface $ISTATE {
  error?: string;
}

export const $INITIALSTATE: $ISTATE = {
  error: '',
};" >> $NAME_FILE.state.ts

echo "file $NAME_FILE.state.ts created"

cd /home/smartit-23/Projects/Chat/front/src/app/core/services/
mkdir $NAME_FILE
echo "directory $NAME_FILE created" 

cd /home/smartit-23/Projects/Chat/front/src/app/core/services/$NAME_FILE
echo "export * from './$NAME_FILE.service';" >> index.ts
echo "file $NAME_FILE created"

echo "import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class $SERVICE {
  private readonly headers;
  private readonly token;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
    this.headers = new HttpHeaders({Authorization: 'Token '$'{this.token}'});
  }

}" >> $NAME_FILE.service.ts

echo "file $NAME_FILE.service.ts created"

