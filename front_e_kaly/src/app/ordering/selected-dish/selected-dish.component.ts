import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dish } from '../models/dish.model';

@Component({
    selector: 'app-selected-dish',
    templateUrl: './selected-dish.component.html',
    styleUrls: ['./selected-dish.component.scss']
})
export class SelectedDishComponent implements OnInit {
    @Input() dish: Dish = new Dish('', '', 0.0, '');
    @Output() onChangingQuantity: EventEmitter<Dish>;

    constructor() {
        this.onChangingQuantity = new EventEmitter();
    }

    ngOnInit(): void {
    }


    increase(): void {
        this.dish.quantity = this.dish.quantity + 1;
    }

    decrease(): void {
        this.dish.quantity = this.dish.quantity - 1;
        this.onChangingQuantity.emit(this.dish);
    }
}
