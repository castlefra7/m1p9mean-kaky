import { NumberInput } from "@angular/cdk/coercion";

export class Dish {
    name: string = "";
    price: number = 0.0;
    quantity: number = 0.0;
    _id: string = "";

    constructor(_id: string, name: string, price: number) {
        this._id = _id;
        this.name =  name;
        this.price = price;
    }

}