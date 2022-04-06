import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../models/dish.model';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})

export class DishesComponent implements OnInit {
  @Input() dishes: Dish[] = [];
  @Input() filteredDishes: Dish[] = [];
  @Input() selectedDishes: Dish[] = [];
  cardcolor: String = "blue";
  dishname: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  filter() {
    this.filteredDishes = this.dishes.filter(el => {
      return el.name.includes(this.dishname);
    });
  }

  selectedDish(dish: Dish) {
    const foundDish = this.selectedDishes.find(function(value) {
      return value.name === dish.name;
    })
    if(!foundDish) {
      const newDish = new Dish(dish.name, dish.price);
      newDish.quantity = 1;
      this.selectedDishes.push(newDish);
    }
  }

}


