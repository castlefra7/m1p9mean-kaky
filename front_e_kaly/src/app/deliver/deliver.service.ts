import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Order } from './deliver.model';



@Injectable({
    providedIn: 'root'
})

export class DeliverService {

    constructor(private http: HttpClient, private router: Router) {
    }


    updateStatus(order_id: String, dish_id: String): Observable<Order> {
        const options = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        };
        return this.http.put<Order>(
            `${environment.url}/orders/${order_id}/details/${dish_id}/status`, {},
            options);
    }

    getAllOrders(): Observable<Order[]> {
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