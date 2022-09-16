import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from'@angular/forms';
import { HttpClientModule}from'@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ListComponent } from './pages/list/list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ViewProductsComponent } from './pages/view-products/view-products.component';
import { ViewUsersComponent } from './pages/view-users/view-users.component';
import { DeleteModalComponent } from './shared/delete-modal/delete-modal.component';
import { SharedModule } from '../shared/shared.module';

//import { DiscountPipe } from '../pipes/discount.pipe';


@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ProductsComponent,
    CategoriesComponent,
    ListComponent,
    DashboardComponent,
    ViewProductsComponent,
    ViewUsersComponent,
    DeleteModalComponent,
   // DiscountPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class AdminModule { }
