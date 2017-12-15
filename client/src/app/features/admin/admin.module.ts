import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Angular2TokenService, A2tUiModule } from 'angular2-token';

import { SharedModule } from '../../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

import { AuthenticationService } from '../../shared/services/authentication.service';
import { AlertService } from '../../shared/services/alert.service';

import { AuthGuard } from '../../shared/guards/auth.guard';

import { AdminComponent } from './admin.component';
import { AdminNavbarComponent } from './navbar/admin-navbar.component';
import { AdminFooterComponent } from './footer/admin-footer.component';
import { AdminLoginComponent } from './login/admin-login.component';
import { AdminRegisterComponent } from './register/admin-register.component';
import { AdminHomeComponent } from './home/admin-home.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminNavbarComponent,
    AdminFooterComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    AdminHomeComponent,
  ],
  imports: [
    HttpModule,
    FormsModule,
    AdminRoutingModule,
    A2tUiModule,
    SharedModule
  ],
  providers: [
    Angular2TokenService,
    AuthenticationService,
    AuthGuard,
    AlertService,
  ],
  bootstrap: [
    AdminComponent
  ]
})
export class AdminModule { }
