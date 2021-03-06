import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { HttpClient } from '@angular/common/http'
import { cartUrl } from '../config/api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] = [];
        for (let item of result) {
          let productExits = false;
          let index: any = 0;
          for (let i in cartItems) {
            if (cartItems[i].product_id === item.product_id) {
              index = i;
              cartItems[i].qty++;
              productExits = true;
              break;
            }
          }
          if(productExits){
            cartItems[index].price = item.price;
          }
          if (!productExits) {
            cartItems.push(new CartItem(item.cart_id, item.product_name, item.product_id, item.qty, item.price, item.image))
          }
        }
        return cartItems;
      })
    )

  }

  addProductToCart(product: any): Observable<any> {
    return this.http.post(cartUrl, { product });
  }

  deleteProductFromCart(cart: CartItem): Observable<any> {
    return this.http.delete(cartUrl+ '/' + cart.cart_id );
  }
}
