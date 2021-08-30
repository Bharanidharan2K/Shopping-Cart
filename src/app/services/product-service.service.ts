import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { productUrl, productUrlWithId } from 'src/app/config/api'

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http :HttpClient) { }

  getProducts(): Observable<Product[]>{
    console.log(productUrl);
    return this.http.get<Product[]>(productUrl);
  }
  getProductsWithId(id : any): Observable<Product[]>{
    console.log(productUrlWithId);
    return this.http.get<Product[]>(productUrlWithId+id).pipe(
      map((result : Product[] ) => {
        let product : Product[] = [];
        result.forEach(item => product.push(item));
        return product;
      })
    )
  }
}
