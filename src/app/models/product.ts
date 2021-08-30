export class Product {
    productId : number;
    productName : string;
    description : string;
    price : number;
    imgUrl : string;

    constructor(productId: number, productName: string,description : string = "", price: number = 0, imgUrl:string = ""){
        this.productId = productId;
        this.productName = productName;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl;
    }
}
