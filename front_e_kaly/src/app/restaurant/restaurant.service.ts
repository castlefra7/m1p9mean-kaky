import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../auth.service';
import { Dish } from './models/dish.model';


export interface Profit {
    restau_id: string,
    name: string,
    amount: number
}

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
}

export interface OrderRow {
    date: Date;
    price: number;
    name: string;
    amount: number;
    status: number;
    quantity: number;
}

@Injectable({
    providedIn: 'root'
})

export class RestaurantService {

    constructor(private http: HttpClient, private router: Router, private auth: AuthService) {
    }

    getAllDishes(): Observable<Dish[]> {
        const options = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        };
        return this.http.get<Dish[]>(
            `${environment.url}/dishes?`,
            options);
    }

    getDish(id: number): Observable<Dish> {
        const options = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        };
        return this.http.get<Dish>(
            `${environment.url}/dishes/${id}`,
            options);
    }

    updateDish(dish: Dish): Observable<Dish> {
        const options = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        };
        return this.http.put<Dish>(
            `${environment.url}/dishes/${dish._id}`,  JSON.stringify(dish),
            options);
    }

    deleteDish(id: string): Observable<string>  {
        const options = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        };
        return this.http.delete<string>(
            `${environment.url}/dishes/${id}`,
            options);
    }

    insertDish(dish: Dish): Observable<Dish> {
        const options = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        };
        return this.http.post<Dish>(
            `${environment.url}/dishes/`, JSON.stringify({name: dish.name, price: dish.price}),
            options);
    }

    getAllProfits(): Observable<Profit[]> {
        const options = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        };
        return this.http.get<Profit[]>(
            `${environment.url}/orders/amounts?`,
            options);
    }

    getAllCurrOrders(): Observable<Order[]>{
        const options = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        };
        return this.http.get<Order[]>(
            `${environment.url}/orders?status=0`,
            options);
    }
}