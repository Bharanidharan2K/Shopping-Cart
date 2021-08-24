import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem!: Product;

  constructor(private messengerService: MessengerService,
    private cartService : CartService
    ) { }

  ngOnInit(): void {
  }

  handleAddtoCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(() =>{
      this.messengerService.sendMessage(this.productItem);
    })
  }

}
