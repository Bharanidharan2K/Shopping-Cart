import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartListComponent } from './components/shopping-cart/cart-list/cart-list.component';
import { CartItemComponent } from './components/shopping-cart/cart-list/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { ProductViewComponent } from './components/shopping-cart/product-view/product-view.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartListComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxImageZoomModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
