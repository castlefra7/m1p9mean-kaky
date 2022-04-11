export interface OrderDetail {
    dish_id: string;
    name: string;
    price: number;
    quantity: number;
    restau_id: string;
    status: number;
    _id: string;
    amount: number;
}

export interface Order {
    details: OrderDetail[];
    user_id: string;
    totalAmount: number;
    date: Date;
    _id: string;
}


export interface OrderRow {
    dish_id: string;
    order_id: string;
    date: Date;
    price: number;
    name: string;
    amount: number;
    status: number;
    quantity: number;
}
