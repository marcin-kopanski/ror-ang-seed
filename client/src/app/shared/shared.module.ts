import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterLink } from '@angular/router'

import { AlertComponent } from './directives/alert.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [
    AlertComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    AlertComponent
  ]
})
export class SharedModule { }
