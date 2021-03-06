import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { PageNotFoundComponent } from "./components/shared/page-not-found/page-not-found.component";
import { CartListComponent } from "./components/shopping-cart/cart-list/cart-list.component";
import { ProductViewComponent } from "./components/shopping-cart/product-view/product-view.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";

const routes : Routes = [
    {path: '', redirectTo: '/shop', pathMatch: 'full' },
    {path: 'login', component : LoginComponent },
    {path: 'register', component : RegisterComponent },
    {path: 'shop', component : ShoppingCartComponent },
    {path: 'cart', component : CartListComponent },
    {path: 'view', component : ProductViewComponent },
    {path: 'view/:id', component : ProductViewComponent },
    {path: '**', component : PageNotFoundComponent },

]
@NgModule({
    imports :[
        RouterModule.forRoot(routes)
    ],
    exports :[
        RouterModule
    ]
})

export class AppRoutingModule{

}