import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../models/dish.model';


@Component({
  selector: 'app-selected-dishes',
  templateUrl: './selected-dishes.component.html',
  styleUrls: ['./selected-dishes.component.scss']
})
export class SelectedDishesComponent implements OnInit {
  @Input() selectedDishes: Dish[] = [];
  cardcolor: String = "blue";
  dishname: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  removeDishIfZero(dish: Dish) {

    if (dish.quantity <= 0) {
      let index = this.selectedDishes.indexOf(dish);
      if (index != -1) this.selectedDishes.splice(index, 1);
    }
  }

  makeOrder(): void {
    console.log(this.selectedDishes);
  }

}
