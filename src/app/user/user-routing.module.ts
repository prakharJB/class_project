
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { ShopComponent } from './pages/shop/shop.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserComponent } from './user.component';
import { BackdoorGuard } from './guard/backdoor.guard';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { AntiBackdoorGuard } from './guard/anti-backdoor.guard';
import { UpdateUserComponent } from './pages/update-user/update-user.component';


const routes: Routes = [
  {
    path:"",
    component : UserComponent,
    children : [
      { 
        path: "",
        component : HomeComponent
      },
      {
        path: "shop",
        component : ShopComponent
      },
      {
        path: "blog",
        component : BlogComponent
      },
      {
        path: "contact",
        component : ContactComponent
      },
      {
        path: "signup",
        component : SignupComponent,
        canActivate : [AntiBackdoorGuard]
      },
      {
        path: "login",
        component : LoginComponent,
        canActivate : [AntiBackdoorGuard]
      },
      {
        path : "my-account",
        component : MyAccountComponent,
        canActivate : [BackdoorGuard]
      },
      {
        path : "my-profile",
        component : MyProfileComponent,
        canActivate :[BackdoorGuard]
      },
      {
        path : "my-profile/update",
        component : UpdateUserComponent,
        canActivate :[BackdoorGuard]
      }

    ]
    
  }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
