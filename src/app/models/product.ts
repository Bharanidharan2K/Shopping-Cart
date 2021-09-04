export class Product {
    product_id : number;
    category_id : number;
    category_name : string;
    product_name : string;
    description : string;
    price : number;
    image : string;

    constructor(product_id: number,category_id : number,category_name : string, product_name: string,description : string = "", price: number = 0, image:string = ""){
        this.product_id = product_id;
        this.category_id = category_id;
        this.category_name = category_name;
        this.product_name = product_name;
        this.description = description;
        this.price = price;
        this.image = image;
    }
}
