import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dish } from '../models/dish.model';

@Component({
    selector: 'app-dish',
    templateUrl: './dish.component.html',
    styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
    @Input() dish: Dish = new Dish('', '', 0.0, '');
    @Output() onClicked: EventEmitter<Dish>;

    constructor() {
        this.onClicked = new EventEmitter();
    }

    ngOnInit(): void {
    }

    clicked(): void {
        this.onClicked.emit(this.dish);
    }
}
