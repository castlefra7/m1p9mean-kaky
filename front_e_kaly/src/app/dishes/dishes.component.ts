import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/dish.model';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})

export class DishesComponent implements OnInit {
  dishes: Dish[];
  filteredDishes: Dish[];
  cardcolor: String = "blue";
  dishname: string = "";

  constructor() {
    this.dishes = [];
    for (let i = 0; i < 20; i++) {
      const price = Math.random() * 30000 + 10000;
      this.dishes.push(new Dish(`Plat ${i + 1}`, price));

    }
    this.filteredDishes = Object.assign([], this.dishes);
  }

  ngOnInit(): void {
  }

  filter() {
    this.filteredDishes = this.dishes.filter(el => {
      return el.name.includes(this.dishname);
    });
  }

}
