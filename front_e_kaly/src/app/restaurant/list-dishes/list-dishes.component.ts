import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Dish } from '../models/dish.model';
import { Profit, RestaurantService } from '../restaurant.service';

@Component({
    selector: 'app-list-dishes',
    templateUrl: './list-dishes.component.html',
    styleUrls: ['./list-dishes.component.scss']
})
export class ListDishesComponent implements OnInit {
    sidecolor = '';
    maincolor = '';
    filteredDishes: Dish[] = [];
    profits: Profit[] = [];
    displayedColumns: string[] = ['name', 'amount'];


    constructor(private restauService: RestaurantService, public auth: AuthService) {

    }

    ngOnInit(): void {
        this.restauService.getAllDishes().subscribe({
            next: (v) => {
                this.filteredDishes = v;
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete')
        });

        this.restauService.getAllProfits().subscribe({
            next: (v) => {
                this.profits = v;
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete')
        })
    }

    modifyDish(dish: Dish) {
        console.log(dish);
    }

    deleteDish(dish: Dish) {
        //console.log(this.filteredDishes.indexOf(dish));
        //this.filteredDishes.splice(this.filteredDishes.indexOf(dish), 1);
        this.restauService.deleteDish(dish._id).subscribe({
            next: (v) => {
                this.restauService.getAllDishes().subscribe({
                    next: (v) => {
                        this.filteredDishes = v;
                    },
                    error: (e) => console.error(e),
                    complete: () => console.info('complete')
                });
            },
            error: (e) => {

            },
            complete: () => console.info('complete')
        });
    }

    selectedDish(dish: Dish) {
        console.log(dish);
    }
}
