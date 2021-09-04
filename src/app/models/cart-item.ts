import { Product } from "./product";

export class CartItem {
    cart_id : number;
    product_name : string;
    product_id : number;
    qty : number;
    price : number;
    image : string;

    constructor(cart_id: number, product_name : string,product_id : number,  qty: number = 1,price : number, image : string){
        this.cart_id = cart_id;
        this.product_name = product_name;
        this.product_id = product_id;
        this.price = price;
        this.qty = qty;
        this.image = image;
    }
}
