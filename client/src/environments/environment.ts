// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  token_auth_config: {
    apiBase:                    'http://localhost:3001',
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
  }
};
