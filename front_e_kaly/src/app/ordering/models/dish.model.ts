import { NumberInput } from "@angular/cdk/coercion";

export class Dish {
    _id: String = "";
    dish_id: String = "";
    name: String = "";
    restau_id: String = "";
    price: number = 0.0;
    
    created_date: Date = new Date();
    quantity: number = 0.0;

    constructor(_id: String, name: String, price: number, restau_id: String) {
        this._id = _id;
        this.dish_id = _id;
        this.name =  name;
        this.price = price;
        this.restau_id = restau_id;
    }

}

export class OrderDetail {
    dish_id: String = "";
    name: String = "";
    price: number = 0.0;
    quantity: number = 0.0;
    restau_id: String = "";
    status: String = "";
    _id: String = "";
    amount: number = 0.0;
}

export class Order {
    details: OrderDetail[] = [];
    user_id: String = "";
    totalAmount: number = 0.0;
    date: Date = new Date();
}