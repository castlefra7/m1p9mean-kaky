import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Dish } from '../models/dish.model';
import { Profit, RestaurantService, OrderRow } from '../restaurant.service';

@Component({
    selector: 'app-list-dishes',
    templateUrl: './list-dishes.component.html',
    styleUrls: ['./list-dishes.component.scss']
})
export class ListDishesComponent implements OnInit {
    sidecolor = '';
    maincolor = '';
    filteredDishes: Dish[] = [];
    loading_1 = false;
    loading_2 = false;
    loading_3 = false;

    profits: Profit[] = [];
    profitsColumns: string[] = ['name', 'amount'];
    
    orders: OrderRow[] = [];
    ordersColumns: string[] = ['date', 'name', 'price', 'amount', 'quantity'];
    
    isDishes = true;

    constructor(private restauService: RestaurantService, public auth: AuthService) {

    }

    ngOnInit(): void {
        this.loading_1 = true;
        this.loading_2 = true;
        this.restauService.getAllDishes().subscribe({
            next: (v) => {
                this.filteredDishes = v;
            },
            error: (e) => console.error(e),
            complete: () => this.loading_1 = false
        });

        this.restauService.getAllProfits().subscribe({
            next: (v) => {
                this.profits = v;
            },
            error: (e) => console.error(e),
            complete: () => this.loading_2 = false
        })

        this.restauService.getAllCurrOrders().subscribe({
            next: (v) => {
                const nOrders = [] as OrderRow[];
                v.forEach(order => {
                    order.details.forEach(detail => {
                        nOrders.push({
                            name: detail.name,
                            price: detail.price,
                            amount: detail.amount,
                            date: new Date(order.date),
                            status: detail.status,
                            quantity: detail.quantity
                        } as OrderRow);
                    });
                });
                this.orders = Object.assign([], nOrders);
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete')
        })
    }

    modifyDish(dish: Dish) {
        console.log(dish);
    }

    deleteDish(dish: Dish) {
        this.loading_3 = true;
        this.restauService.deleteDish(dish._id).subscribe({
            next: (v) => {
                this.restauService.getAllDishes().subscribe({
                    next: (v) => {
                        this.filteredDishes = v;
                    },
                    error: (e) => console.error(e),
                    complete: () => this.loading_3 = false
                });
            },
            error: (e) => {

            },
            complete: () => console.info('complete')
        });
    }

    toggleShow() {
        this.isDishes = !this.isDishes;
    }

    showDishes() {
        this.isDishes = true;
    }
}
