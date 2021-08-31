import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  images = ['../../assets/1.jpg', '../../assets/2.jpg', '../../assets/3.jpg'];
  constructor() {}

  ngOnInit(): void {
  }

}
