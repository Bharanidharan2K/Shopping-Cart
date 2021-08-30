import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cartList: any[] = [
    // {id: 1, productName: 'Test 1', productId: 1, qty: 84, price: 12},

  ];

  cartTotal: number = 0;
  cartTotalItem: number = 0;
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
        this.calculateTotal();
        this.calculateTotalItem();
    })
  }

  calculateTotal(){
    this.cartTotal = 0
    this.cartList.forEach(element => {
      this.cartTotal += (element.qty * element.price);
    })
  }
  calculateTotalItem(){
    this.cartTotalItem = 0
    this.cartList.forEach(element => {
      this.cartTotalItem +=element.qty;
    })
  }

}
