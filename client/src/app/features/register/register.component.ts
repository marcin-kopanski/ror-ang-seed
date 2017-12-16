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
    passwordConfirmation: ''
  };

  loading = false;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private authService: AuthenticationService
  ) { }

  onSignUpSubmit() {
    this.loading = true;
    this.authService.register(this.signUpUser)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        errors => {
          console.log(errors);
          if (errors) {
            console.log(errors.json().errors.full_messages);
            errors.json().errors.full_messages.forEach((msg) => {
              this.alertService.error(msg);
            });
            this.loading = false;
          }
        });
  }
}
