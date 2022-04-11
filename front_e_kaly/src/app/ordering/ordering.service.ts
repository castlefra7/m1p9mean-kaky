import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Dish, Order } from './models/dish.model';



@Injectable({
    providedIn: 'root'
})

export class OrderingService {
    dishes: Dish[] = [];

    constructor(private http: HttpClient, private router: Router) {
    }

    makeOrder(dishes: Dish[]): Observable<Order> {
        const options = {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                'Accept': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        };
        return this.http.post<Order>(`${environment.url}/orders`, JSON.stringify({ details: dishes }), options)
    }

    getAllDishes(): Observable<Dish[]> {
        const options = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        };
        return this.http.get<Dish[]>(
            `${environment.url}/dishes`,
            options);
    }
}