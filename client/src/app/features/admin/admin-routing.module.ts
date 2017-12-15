import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './login/admin-login.component';
import { AdminRegisterComponent } from './register/admin-register.component';
import { AdminHomeComponent } from './home/admin-home.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      // { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: AdminHomeComponent },
      { path: 'login', component: AdminLoginComponent },
      { path: 'register', component: AdminRegisterComponent }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule {}
