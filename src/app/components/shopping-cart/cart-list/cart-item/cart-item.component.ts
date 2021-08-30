import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  cartItem : any;
  constructor(private cartService: CartService,
    private messengerService : MessengerService
    ) { }

  ngOnInit(): void {
  }
  handleAddtoCart(){
    this.cartService.addProductToCart(this.cartItem).subscribe(() =>{
      this.messengerService.sendMessage(this.cartItem);
    })
  }

  handleDeletetoCart(){
    this.cartService.deleteProductFromCart(this.cartItem).subscribe(() =>{
      this.messengerService.sendMessage(this.cartItem);
      console.log("Product Deleted Successfully..!")
    })
  }

}
