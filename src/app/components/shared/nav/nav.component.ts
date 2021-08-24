import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  cartList: any[] = [];
  price : number = 0;
  totalQty: number = 0;
  constructor(private msg: MessengerService,
    private cartService : CartService
    ) { }

    ngOnInit(): void {
      this.handleSubscription();
      this.loadCartItems();
     }
   
     handleSubscription(){
       this.msg.getMessage().subscribe((product: any) => {
         // Here Instead of calling this addTocart function we can call loadCartItems
         this.loadCartItems();
       })
     }
   
     loadCartItems(){
       this.cartService.getCartItems().subscribe((items : CartItem[]) => {
           this.cartList = items;
           this.addProductToCart();
       })
     }

  addProductToCart(){
    this.price = 0;
    this.totalQty = 0;
    this.cartList.forEach(element => {
      this.price += (element.qty * element.price);
      this.totalQty += element.qty;
    })
  }

}
