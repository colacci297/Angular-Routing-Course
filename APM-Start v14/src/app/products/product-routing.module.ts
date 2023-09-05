import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductListComponent} from "./product-list.component";
import {ProductDetailComponent} from "./product-detail.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";


export const routes : Routes = [
  { path: '', component: ProductListComponent},
  { path: ':id', component: ProductDetailComponent},
  { path: ':id/edit', component: ProductEditComponent},
  { path: ':name/:code/:startDate/:endDate', component: ProductListComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
