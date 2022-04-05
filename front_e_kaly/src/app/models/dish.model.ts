import { NumberInput } from "@angular/cdk/coercion";

export class Dish {
    name: String = "";
    price: Number = 0.0;

    constructor(name: String, price: Number) {
        this.name =  name;
        this.price = price;
    }

}