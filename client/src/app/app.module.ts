import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Angular2TokenService, A2tUiModule } from 'angular2-token';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    A2tUiModule
  ],
  providers: [
    Angular2TokenService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
