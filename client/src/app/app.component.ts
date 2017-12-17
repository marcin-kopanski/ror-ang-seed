import { Component, OnInit } from '@angular/core';

import { Angular2TokenService } from "angular2-token";
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private authToken: Angular2TokenService) { }

  ngOnInit() {

  this.authToken.init(environment.token_auth_config);
  }
}
