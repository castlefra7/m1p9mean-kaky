import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../auth.service';
import { Dish } from './models/dish.model';


export interface Profit {
    restau_id: String,
    name: String,
    amount: number
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
            `${environment.url}/dishes?restau-id=${this.auth.restauId()}`,
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

    deleteDish(id: String): Observable<string>  {
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
            `${environment.url}/orders/amounts?restau-id=${this.auth.restauId()}`,
            options);
    }
}