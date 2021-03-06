import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../../shared/services/alert.service';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  moduleId: module.id.toString(),
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  signUpUser = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    userType: 'USER'
  };

  loading = false;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private authService: AuthenticationService
  ) { }

  onSignUpSubmit() {
    this.loading = true;
    this.authService.signUp(this.signUpUser)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        errors => {
          if (errors) {
            errors.json().errors.full_messages.forEach((msg) => {
              this.alertService.error(msg);
            });
            this.loading = false;
          }
        });
  }
}
