import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainBannerComponent } from './components/homeSections/main-banner/main-banner.component';
import { MenuComponent } from './components/homeSections/menu/menu.component';
import { CombosComponent } from './components/homeSections/combos/combos.component';
import { HowToOrderComponent } from './components/homeSections/how-to-order/how-to-order.component';
import { ReservationComponent } from './components/homeSections/reservation/reservation.component';
import { AboutComponent } from './components/homeSections/about/about.component';
import { CreatorsComponent } from './components/homeSections/creators/creators.component';
import { BlogComponent } from './components/homeSections/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CartComponent } from './pages/cart/cart.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainBannerComponent,
    MenuComponent,
    CombosComponent,
    HowToOrderComponent,
    ReservationComponent,
    AboutComponent,
    CreatorsComponent,
    BlogComponent,
    HomeComponent,
    NotFoundComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
