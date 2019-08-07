import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';
import {CartComponent} from './cart/cart.component';
import {AdminComponent} from './admin/admin.component';

const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
 
  {path: 'Home', component: LoginComponent},
  {path: 'User', component: UserComponent},
   {path: 'Cart', component: CartComponent},
  {path: 'Admin', component: AdminComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
