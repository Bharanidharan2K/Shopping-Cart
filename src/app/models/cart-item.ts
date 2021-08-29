import { Product } from "./product";

export class CartItem {
    id : number;
    productName : string;
    productId : number;
    qty : number;
    price : number;

    constructor(id: number, productName : string,productId : number,  qty: number = 1,price : number){
        this.id = id;
        this.productName = productName;
        this.productId = productId;
        this.price = price;
        this.qty = qty;
    }
}
