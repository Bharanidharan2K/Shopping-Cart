import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList : Product[] = [];
  wishList : number[] = [];
  constructor(private productService: ProductServiceService,
    private wishListService: WishlistService
    ) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadWishList();
  }

  loadProducts(){
    this.productService.getProducts().subscribe(products => {
      this.productList = products;
    })
  }
  loadWishList(){
    this.wishListService.getWishlist().subscribe(productsId =>{
      this.wishList = productsId;
    })
  }
}
