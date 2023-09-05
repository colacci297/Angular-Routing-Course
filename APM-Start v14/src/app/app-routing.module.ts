import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {WelcomeComponent} from "./home/welcome.component";
import {PageNotFoundComponent} from "./page-not-found.component";
import {ProductListComponent} from "./products/product-list.component";


const routes : Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () => import('./products/product.module').then(m => m.ProductModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
