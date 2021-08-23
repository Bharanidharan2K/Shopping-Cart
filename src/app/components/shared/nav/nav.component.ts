import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  price : number = 0;
  totalQty: number = 0;
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.msg.getMessage().subscribe((product: any) => {
      this.addProductToCart(product);
    })

  }

  addProductToCart(product : Product){
    this.price += product.price;
    this.totalQty ++;
  }

}
