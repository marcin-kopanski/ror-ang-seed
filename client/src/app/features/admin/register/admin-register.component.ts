import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../../../shared/services/alert.service';
// import { UsersService } from '../services/users.service';

@Component({
  selector: 'admin-login',
  templateUrl: 'admin-register.component.html',
  styleUrls: ['./admin-register.component.scss']
})

export class AdminRegisterComponent {
  model: any = {};
  loading = false;

  constructor(
      private router: Router,
      // private usersService: UsersService,
      private alertService: AlertService) { }

  register() {
      this.loading = true;
      // this.usersService.create(this.model)
      //     .subscribe(
      //         data => {
      //             this.alertService.success('Registration successful', true);
      //             this.router.navigate(['/login']);
      //         },
      //         error => {
      //             this.alertService.error(error);
      //             this.loading = false;
      //         });
  }
}
