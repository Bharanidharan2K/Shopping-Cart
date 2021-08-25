import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { wishListUrl } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http : HttpClient) { }

  getWishlist(){
    return this.http.get<any[]>(wishListUrl).pipe(
      map((result : any[]) =>{
        let productsId: any[] = [];
        result.forEach(item => productsId.push(item.id));
        return productsId;
      })
    )
  }

  addToWishlist(productId: number){
    return this.http.post(wishListUrl, {id: productId});
  }
  removeWishlist(productId: number){
    return this.http.delete(wishListUrl + '/' + productId);
  }
}
