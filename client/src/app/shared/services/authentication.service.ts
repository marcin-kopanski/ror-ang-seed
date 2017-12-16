import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map'

import { Angular2TokenService } from "angular2-token";
import { environment } from "../../../environments/environment";

@Injectable()
export class AuthenticationService {
  userSignedIn:Subject<boolean> = new Subject();

  constructor (
    private http: Http,
    private authToken: Angular2TokenService) {
    this.authToken.init(environment.token_auth_config);
  }

  register(
    signUpData:
      {
        first_name:string,
        last_name:string,
        email:string,
        password:string,
        passwordConfirmation:string
      }
  ):Observable<Response> {
    return this.authToken.registerAccount(signUpData).map(
      res => {
        this.userSignedIn.next(true);
        return res;
      }
    );
  }

  login(username: string, password: string) {
      return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
          .map((response: Response) => {
              // login successful if there's a jwt token in the response
              let user = response.json();
              if (user && user.token) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify(user));
              }
          });

      // this.authToken.signIn({email: "user@example.com", password: "monkey67"}).subscribe(
      //     res => {
      //       console.log('auth response:', res);
      //       console.log('auth response headers: ', res.headers.toJSON()); //log the response header to show the auth token
      //       console.log('auth response body:', res.json()); //log the response body to show the user
      //     },
      //
      //     err => {
      //       console.error('auth error:', err);
      //     }
      // )
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
