import { NumberInput } from "@angular/cdk/coercion";

export class Dish {
    name: String = "";
    price: number = 0.0;
    quantity: number = 0.0;

    constructor(name: String, price: number) {
        this.name =  name;
        this.price = price;
    }

}