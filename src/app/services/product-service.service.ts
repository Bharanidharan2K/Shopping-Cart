import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  
  products : Product[] = [
    new Product(1, 'Product 1', 'This is the product 1 description', 100),
    new Product(2, 'Product 2', 'This is the product 2 description', 150),
    new Product(3, 'Product 3', 'This is the product 3 description', 200),
    new Product(4, 'Product 4', 'This is the product 4 description', 250),
    new Product(5, 'Product 5', 'This is the product 5 description', 300),
    new Product(6, 'Product 6', 'This is the product 6 description', 350),

  ]
  constructor() { }

  getProducts(): Product[]{
    //TODO: Populate products from an API and return an Observable
    return this.products;
  }
}
