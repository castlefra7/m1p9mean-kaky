import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish } from '../models/dish.model';



@Injectable({
    providedIn: 'root'
})

export class RestaurantService {
    dishes: Dish[] = [];

    getAllDishes(): Dish[] {
        if(this.dishes.length == 0) {
            for (let i = 0; i < 30; i++) {
                const price = Math.random() * 30000 + 10000;
                this.dishes.push(new Dish(i, `Plat ${i + 1}`, price));
            }
        }
        return this.dishes;
    }

    getDish(id: number): Dish {
        if(id >= this.dishes.length) return new Dish(-1, "", 0.0);
        return this.dishes[id];
    }

    insertDish(dish: Dish): void {
        console.log(`inserting dish`);
        console.log(dish);
    }
}