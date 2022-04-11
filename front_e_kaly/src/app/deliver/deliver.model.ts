export interface OrderDetail {
    dish_id: String;
    name: String;
    price: number;
    quantity: number;
    restau_id: String;
    status: number;
    _id: String;
    amount: number;
}

export interface Order {
    details: OrderDetail[];
    user_id: String;
    totalAmount: number;
    date: Date;
    _id: String;
}


export interface OrderRow {
    dish_id: String;
    order_id: String;
    date: Date;
    price: number;
    name: String;
    amount: number;
    status: number;
}
