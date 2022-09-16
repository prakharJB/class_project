import { compileClassMetadata } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListComponent } from './pages/list/list.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { BackdoorGuard } from './guard/backdoor.guard';
import { AntiBackdoorGuard } from './guard/anti-backdoor.guard';
import { ViewProductsComponent } from './pages/view-products/view-products.component';
import { ViewUsersComponent } from './pages/view-users/view-users.component';

const routes: Routes = [
  {
    path:"",
    component: AdminComponent,
    children: [
      {
        path: "",
        component : LoginComponent,
        canActivate : [AntiBackdoorGuard]
        
      },
      {
        path : "product",
        component: ProductsComponent,
        canActivate : [BackdoorGuard]
      },
      {
        path: "categories",
        component: CategoriesComponent,
        canActivate : [BackdoorGuard]
      },
      {
        path: "categories/edit/:id",
        component: CategoriesComponent,
        canActivate : [BackdoorGuard]
      },
      {
        path: "dashboard",
        component: DashboardComponent,
        canActivate : [BackdoorGuard]
      },
      {
        path: "categories/list",
        component : ListComponent,
        canActivate : [BackdoorGuard]
      },
      {
        path: "product/view-products",
        component : ViewProductsComponent,
        canActivate : [BackdoorGuard]
      },
      {
        path: "users/view-users",
        component : ViewUsersComponent,
        canActivate : [BackdoorGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
