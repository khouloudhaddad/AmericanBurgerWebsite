import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    title: "American Burger | Home",
    component: HomeComponent
  },
  {
    path: "cart",
    title: "American Burger | Shopping Cart",
    component: CartComponent
  },
  {
    path: "**",
    title: "American Burger | 404",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
