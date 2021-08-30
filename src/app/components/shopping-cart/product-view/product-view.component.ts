import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  product: any;
  
  constructor(private route : ActivatedRoute,
    private productService : ProductServiceService
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
      // console.log(this.product)
    })
  }

}
