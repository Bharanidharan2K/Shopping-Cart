import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
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
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.msg.getMessage().subscribe((product: any) => {
      this.addToCart(product);
    })

  }

  addToCart(product: Product) {

    let productExits = false;

    for (let i in this.cartList) {
      if (this.cartList[i].productId === product.id) {
        this.cartList[i].qty++;
        productExits = true;
        break;
      }
    }
    if(!productExits){
      this.cartList.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }
    

    this.cartTotal = 0
    this.cartList.forEach(element => {
      this.cartTotal += (element.qty * element.price);
    })

  }

}
