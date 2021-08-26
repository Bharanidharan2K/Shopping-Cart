import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { productUrl } from 'src/app/config/api'

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http :HttpClient) { }

  getProducts(): Observable<Product[]>{
    //TODO: Populate products from an API and return an Observable
    console.log(productUrl);
    return this.http.get<Product[]>(productUrl);
  }
}
