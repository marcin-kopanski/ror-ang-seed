import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map'

import { Angular2TokenService } from "angular2-token";
import { environment } from "../../../environments/environment";

@Injectable()
export class AuthenticationService {
  userSignedUp:Subject<boolean> = new Subject();
  userSignedIn:Subject<boolean> = new Subject();
  userSignedOut:Subject<boolean> = new Subject();

  constructor (
    private http: Http,
    private authToken: Angular2TokenService) {
    this.authToken.init(environment.token_auth_config);
  }

  signUp(
    signUpData:
      {
        first_name:           string,
        last_name:            string,
        email:                string,
        password:             string,
        passwordConfirmation: string,
        userType?:            string
      }
  ):Observable<Response> {
    return this.authToken.registerAccount(signUpData).map(
      res => {
        this.userSignedUp.next(true);
        return res;
      }
    );
  }

  signIn(
    signInData:
      {
        email:                string,
        password:             string,
        userType?:            string
      }
  ):Observable<Response> {
    return this.authToken.signIn(signInData).map(
      res => {
        this.userSignedIn.next(true);
        return res;
      }
    );
  }

  signOut() {
    this.authToken.signOut().subscribe(
      res => this.userSignedOut.next(true)
    );
  }
}
