export class Product {
    id : number;
    name : string;
    description : string;
    price : number;
    imgUrl : string;

    constructor(id: number, name: string,description : string = "", price: number = 0, imgUrl:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9FAMcsa3LZ1ev_yxfocoMysuqo3ddqnyRUw&usqp=CAU"){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl;
    }
}
