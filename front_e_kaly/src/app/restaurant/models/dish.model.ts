import { NumberInput } from "@angular/cdk/coercion";

export class Dish {
    name: String = "";
    price: number = 0.0;
    quantity: number = 0.0;
    id: number = -1;

    constructor(id: number, name: String, price: number) {
        this.id = id;
        this.name =  name;
        this.price = price;
    }

}