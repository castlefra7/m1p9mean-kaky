import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/dish.model';
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

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 2, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    // { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    // { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  dishes: Dish[] = [];
  filteredDishes: Dish[] = [];
  selectedDishes: Dish[] = [];
  
  ngOnInit(): void {
  }


  constructor() {
    this.dishes = [];
    for (let i = 0; i < 20; i++) {
      const price = Math.random() * 30000 + 10000;
      this.dishes.push(new Dish(`Plat ${i + 1}`, price));
    }
    this.filteredDishes = Object.assign([], this.dishes);
  }
}
