import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Dish } from '../models/dish.model';
import { OrderingService } from '../ordering.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


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
    sidecolor = 'whitesmoke';
    maincolor = '';

    loading = true;
    dishes: Dish[] = [];
    filteredDishes: Dish[] = [];
    selectedDishes: Dish[] = [];

    cardcolor: string = "blue";
    dishname: string = "";

    constructor(private orderService: OrderingService, public auth: AuthService) {

    }

    ngOnInit(): void {
        this.orderService.getAllDishes().subscribe({
            next: (v) => {
                v.forEach(dish => {
                    dish.quantity = 1;
                    dish.dish_id = dish._id;
                });
                this.dishes = v;
                this.filteredDishes = Object.assign([], v);
            },
            error: (e) => console.error(e),
            complete: () => this.loading = false
        });
    }

    removeDishIfZero(dish: Dish) {

        if (dish.quantity <= 0) {
            dish.quantity = 1;
            // let index = this.selectedDishes.indexOf(dish);
            // if (index != -1) this.selectedDishes.splice(index, 1);
        }
    }

    makeOrder(): void {
        this.orderService.makeOrder(this.selectedDishes).subscribe({
            next: (v) => {
                let details = "";
                v.details.forEach((detail) => {
                    details += `${detail.name} | ${detail.quantity} | ${detail.amount}\n`;
                })
                alert(`
Commande effectué avec succès
Total: ${v.totalAmount}
Details:
Nom | Quantité | Montant
${details}
                `)
            },
            error: (e) => alert(e.error.message),
            complete: () => {
                this.selectedDishes.splice(0);
            }
        });
    }

    filter() {
        const doingSearch = [] as Dish[];
        this.dishes.forEach(dish => {
            let seen = false;
            this.selectedDishes.forEach(d => {
                if(d._id == dish._id) seen = true;
            })
            if(!seen) doingSearch.push(dish);
        });
        this.filteredDishes = doingSearch.filter(el => {
            return el.name.includes(this.dishname);
        });
    }

    selectedDish(dish: Dish) {
        // const foundDish = this.selectedDishes.find(function (value) {
        //     return value._id === dish._id;
        // })
        // if (!foundDish) {
        //     const newDish = new Dish(dish._id, dish.name, dish.price, dish.restau_id);
        //     newDish.quantity = 1;
        //     this.selectedDishes.push(newDish);
        // }
    }

    drop(event: CdkDragDrop<Dish[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );
        }
    }
}
