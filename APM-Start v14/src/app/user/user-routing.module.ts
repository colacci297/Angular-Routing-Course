import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "../page-not-found.component";
import {LoginComponent} from "./login.component";

export const routes : Routes = [
  { path: '', component: LoginComponent},
  // { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class UserRoutingModule { }
