import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import * as AuthActions from './auth.actions';
import { Router } from '@angular/router';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: string;
}

@Injectable()
export class AuthEffects {
  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: AuthActions.LoginStart) => {
      return this.httpClient
        .post<AuthResponseData>(
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB7jft5hA-niRgw7dof0i7EPul0s3PN9Pg',
          {
            email: authData.payload.email,
            password: authData.payload.password,
            returnSecureToken: true,
          }
        )
        .pipe(
          map((resData) => {
            const expirationDate = new Date(
              new Date().getTime() + +resData.expiresIn * 1000
            );

            return new AuthActions.Login({
              email: resData.email,
              userId: resData.idToken,
              token: resData.idToken,
              expirationDate,
            });
          }),
          catchError((errorResponse) => {
            let errorMessage = 'An Unknown error ocurred!';

            if (!errorResponse.error || !errorResponse.error.error) {
              return of(new AuthActions.LoginFailed(errorMessage));
            }

            switch (errorResponse.error.error.message) {
              case 'EMAIL_EXISTS':
                errorMessage = 'This Email Already exists';
                break;
              case 'EMAIL_NOT_FOUND':
                errorMessage = 'This Email or password doest not exist';
                break;
              case 'INVALID_PASSWORD':
                errorMessage = 'This Email or password doest not exist';
                break;
            }

            return of(new AuthActions.LoginFailed(errorMessage));
          })
        );
    })
  );

  @Effect({ dispatch: false })
  authSuccess = this.actions$.pipe(
    ofType(AuthActions.LOGIN),
    tap(() => {
      this.router.navigate(['/']);
    })
  );
  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    private router: Router
  ) {}
}
