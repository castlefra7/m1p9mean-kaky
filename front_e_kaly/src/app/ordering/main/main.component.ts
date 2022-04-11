import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/dish.model';
import { OrderingService } from '../ordering.service';
export interface Tile {
    color: string;
    cols: number;
    rows: number;
    text: string;
}


@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    sidecolor = '';
    maincolor = '';
    dishes: Dish[] = [];
    filteredDishes: Dish[] = [];
    selectedDishes: Dish[] = [];
    constructor(private orderService: OrderingService) {

    }

    ngOnInit(): void {
        this.orderService.getAllDishes().subscribe({
            next: (v) => {
                this.dishes = v;
                this.filteredDishes = Object.assign([], v);
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete')
        });
    }
}
