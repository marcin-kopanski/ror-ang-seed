import { Component, OnInit } from '@angular/core';

import { AlertService } from '../services/alert.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'alert',
  templateUrl: 'alert.component.html'
})
export class AlertComponent {
  messages: any[] = [];

  constructor(
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.alertService.getMessage().subscribe(
      message => {
        console.log(message);
        this.messages.push(message);
      }
    );

    this.alertService.alertsReset$.subscribe(
      value => {
        console.log("alertsReset");
        this.messages.splice(0, this.messages.length);
      }
    );
  }
}
