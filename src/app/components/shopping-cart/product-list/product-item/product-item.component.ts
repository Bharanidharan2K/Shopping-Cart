import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem!: Product;

  @Input()
  wishListFlag : boolean | undefined;
  constructor(private messengerService: MessengerService,
    private cartService : CartService,
    private wishListService : WishlistService,
    private router : Router
    ) { }

  ngOnInit(): void {
  }
  getProductView(id : any){
    
    this.router.navigateByUrl('/view/'+id);
  }
  handleAddtoCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(() =>{
      this.messengerService.sendMessage(this.productItem);
    })
  }

  handleAddtoWishList(){
    this.wishListService.addToWishlist(this.productItem.product_id).subscribe(() =>{
      this.wishListFlag = true;
    })
  }

  handleDeleteWishList(){
    this.wishListService.removeWishlist(this.productItem.product_id).subscribe(() => {
      this.wishListFlag = false;
    })
  }

}
