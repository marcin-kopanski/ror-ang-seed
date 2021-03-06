import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Angular2TokenService, A2tUiModule } from 'angular2-token';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AuthenticationService } from './shared/services/authentication.service';
import { AlertService } from './shared/services/alert.service';

import { AuthGuard } from './shared/guards/auth.guard';

import { AppComponent } from './app.component';
import { EmptyComponent } from './empty.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    EmptyComponent,
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
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
    EmptyComponent
  ]
})
export class AppModule { }
