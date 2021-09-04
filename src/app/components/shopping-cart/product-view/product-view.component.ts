import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  product: any;
  MainImage : any;
  
  constructor(private route : ActivatedRoute,
    private productService : ProductServiceService,
    private messengerService : MessengerService,
    private cartService : CartService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.loadProducts(param);
    })
  }
  loadProducts(param : any){
    let id: number = param['id'];
    this.productService.getProductsWithId(id).subscribe(products => {
      this.product = products[0];
      this.MainImage = this.product.image
      // console.log(this.product)
    })
  }

  handleAddtoCart(){
    this.cartService.addProductToCart(this.product).subscribe(() =>{
      this.messengerService.sendMessage(this.product);
    })
  }

}
