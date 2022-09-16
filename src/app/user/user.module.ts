import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }from'@angular/common/http';
import { ReactiveFormsModule }from '@angular/forms'

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { TopHeaderComponent } from './shared/top-header/top-header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SliderComponent } from './shared/slider/slider.component';
import { CollectionsComponent } from './shared/collections/collections.component';
import { SaleComponent } from './shared/sale/sale.component';
import { LatestNewsComponent } from './shared/latest-news/latest-news.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { HomecontentComponent } from './shared/homecontent/homecontent.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { SharedModule } from '../shared/shared.module';

//import { DiscountPipe } from '../pipes/discount.pipe';


@NgModule({
  declarations: [
    UserComponent,
    TopHeaderComponent,
    NavbarComponent,
    SliderComponent,
    CollectionsComponent,
    SaleComponent,
    LatestNewsComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    BlogComponent,
    MyAccountComponent,
    MyProfileComponent,
    HomecontentComponent,
    UpdateUserComponent,
   // DiscountPipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class UserModule { }
