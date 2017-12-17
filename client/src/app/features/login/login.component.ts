import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../shared/services/authentication.service';
import { AlertService } from '../../shared/services/alert.service';

@Component({
  moduleId: module.id.toString(),
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  signInUser = {
    email: '',
    password: '',
    userType: 'USER'
  };

  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    // reset login status
    // this.authenticationService.userSignOut();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['return_url'] || '/';
  }

  onSignInSubmit() {
    this.loading = true;
    this.authService.signIn(this.signInUser)
      .subscribe(
        data => {
          this.alertService.success('Login successful', true);
          this.router.navigate([this.returnUrl]);
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
