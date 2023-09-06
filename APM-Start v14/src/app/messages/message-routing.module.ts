import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MessageComponent} from "./message.component";

export const routes: Routes = [
  {
    path: 'messages',
    component: MessageComponent,
    outlet: 'popup'
  }
];


@NgModule({
  declarations: [],
  imports:
    [CommonModule,
      RouterModule.forChild(routes)
    ],
  exports: [RouterModule]
})
export class MessageRoutingModule {
}
