import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as authAction from '@action/auth.actions';
import { Router } from '@angular/router';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from '@service/auth';
import * as jwt_decode from 'jwt-decode';
import { ThemeService } from '@app/theme';
import { TranslateService } from '@ngx-translate/core';

interface ILoginData {
  token: string;
  message: string;
}


@Injectable()
export class AuthEffect {

  constructor(private actions$: Actions,
              private http: AuthService,
              private router: Router,
              private themeService: ThemeService,
              private translate: TranslateService) {
  }

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(authAction.ActionTypes.LOGIN_REQUEST),
    switchMap((action: any) => {
      return this.http.login(action.payload)
        .pipe(
          map((data: ILoginData) => {
            localStorage.setItem('token', data.token);
            const token: any = jwt_decode(data.token);
            localStorage.setItem('theme', token.theme);
            this.themeService.setTheme(token.theme);
            this.translate.use(token.language);
            this.router.navigate(['/']);
            return new authAction.LoginSuccess({token: data.token, message: data.message});
          }),
          catchError(error =>
            observableOf(new authAction.LoginFailure({error}))
          )
        );
    })
  );
}
