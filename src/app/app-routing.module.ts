import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

const routes: Routes = [
  {path :"login", component:LoginComponent},
  {path :"contact", component:ContactComponent},
  {path :"userinfo", component:UserinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
