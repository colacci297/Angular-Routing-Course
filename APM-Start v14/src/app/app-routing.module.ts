import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {WelcomeComponent} from "./home/welcome.component";
import {PageNotFoundComponent} from "./page-not-found.component";


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
  {
    path: 'messages',
    loadChildren: () => import('./messages/message.module').then(m => m.MessageModule)
  },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes,{enableTracing: true})
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
