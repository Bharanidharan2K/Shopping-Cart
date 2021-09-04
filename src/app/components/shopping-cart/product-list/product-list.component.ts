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
  categoryList : any[] = [];
  filteredProductList : Product[] = [];
  searchItem : string | undefined;
  wishList : number[] = [];
  constructor(private productService: ProductServiceService,
    private wishListService: WishlistService
    ) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadWishList();
    this.loadCategory();
  }

  onDropdownClick(event: any){
    this.searchItem = event.target.value;
    this.filteredProductList = this.filterProductMethod(event.target.value);
  }

  filterProductMethod(searchString : string){
    return this.productList.filter(product =>
      product.category_name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)
  }

  loadProducts(){
    this.productService.getProducts().subscribe(products => {
      this.productList = products;
      this.filteredProductList = this.productList;
    })
  }

  loadCategory(){
    this.productService.getCategory().subscribe(category => {
      this.categoryList = category;
    })
  }
  loadWishList(){
    this.wishListService.getWishlist().subscribe(productsId =>{
      this.wishList = productsId;
    })
  }
}
