import { Component } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'admin-root',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  title = 'app';

  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init({
        apiBase:                    null,
        apiPath:                    null,

        signInPath:                 'auth/sign_in',
        signInRedirect:             null,
        signInStoredUrlStorageKey:  null,

        signOutPath:                'auth/sign_out',
        validateTokenPath:          'auth/validate_token',
        signOutFailedValidate:      false,

        registerAccountPath:        'auth',
        deleteAccountPath:          'auth',
        registerAccountCallback:    window.location.href,

        updatePasswordPath:         'auth',
        resetPasswordPath:          'auth/password',
        resetPasswordCallback:      window.location.href,

        oAuthBase:                  window.location.origin,
        oAuthPaths: {
            github:                 'auth/github'
        },
        oAuthCallbackPath:          'oauth_callback',
        oAuthWindowType:            'newWindow',
        oAuthWindowOptions:         null,

        userTypes:                  [
                                        { name: 'ADMIN', path: 'admin' },
                                        { name: 'USER', path: 'user' }
                                    ],

        globalOptions: {
            headers: {
                'Content-Type':     'application/json',
                'Accept':           'application/json'
            }
        }
    });
  }
}
