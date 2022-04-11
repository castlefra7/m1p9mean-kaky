import { NumberInput } from "@angular/cdk/coercion";

export class Dish {
    name: String = "";
    price: number = 0.0;
    quantity: number = 0.0;
    _id: String = "";

    constructor(_id: String, name: String, price: number) {
        this._id = _id;
        this.name =  name;
        this.price = price;
    }

}