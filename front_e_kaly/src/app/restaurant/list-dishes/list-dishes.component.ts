import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/dish.model';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-list-dishes',
  templateUrl: './list-dishes.component.html',
  styleUrls: ['./list-dishes.component.scss']
})
export class ListDishesComponent implements OnInit {
  sidecolor = '';
  maincolor = '';
  filteredDishes: Dish[] = [];

  constructor(private restauService: RestaurantService) {
    this.filteredDishes = Object.assign([], restauService.getAllDishes());
  }

  ngOnInit(): void {
  }

  modifyDish(dish: Dish) {
    console.log(dish);
  }

  deleteDish(dish: Dish) {
    console.log(this.filteredDishes.indexOf(dish));
    this.filteredDishes.splice(this.filteredDishes.indexOf(dish), 1);
  }

  selectedDish(dish: Dish) {
    console.log(dish);
  }
}
