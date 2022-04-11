import { NumberInput } from "@angular/cdk/coercion";

export class Dish {
    _id: string = "";
    dish_id: string = "";
    name: string = "";
    restau_id: string = "";
    price: number = 0.0;
    
    created_date: Date = new Date();
    quantity: number = 0.0;

    constructor(_id: string, name: string, price: number, restau_id: string) {
        this._id = _id;
        this.dish_id = _id;
        this.name =  name;
        this.price = price;
        this.restau_id = restau_id;
    }

}

export class OrderDetail {
    dish_id: string = "";
    name: string = "";
    price: number = 0.0;
    quantity: number = 0.0;
    restau_id: string = "";
    status: string = "";
    _id: string = "";
    amount: number = 0.0;
}

export class Order {
    details: OrderDetail[] = [];
    user_id: string = "";
    totalAmount: number = 0.0;
    date: Date = new Date();
}