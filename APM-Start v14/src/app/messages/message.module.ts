import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { MessageComponent } from './message.component';
import {RouterModule} from "@angular/router";
import {MessageRoutingModule} from "./message-routing.module";

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    MessageRoutingModule
  ],
  declarations: [
    MessageComponent
  ]
})
export class MessageModule { }
