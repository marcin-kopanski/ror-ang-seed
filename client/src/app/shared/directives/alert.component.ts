import { Component, OnInit } from '@angular/core';

import { AlertService } from '../services/alert.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'alert',
  templateUrl: 'alert.component.html'
})
export class AlertComponent {
  messages: any[] = [];

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => { this.messages.push(message); });
  }
}
