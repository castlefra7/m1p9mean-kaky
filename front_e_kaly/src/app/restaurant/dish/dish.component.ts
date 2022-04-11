import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dish } from '../models/dish.model';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {

  @Input() dish: Dish = new Dish('', '', 0.0);
  @Output() delete: EventEmitter<Dish>;
  @Output() modify: EventEmitter<Dish>;

  constructor() {
    this.delete = new EventEmitter();
    this.modify = new EventEmitter();
  }

  ngOnInit(): void {
  }

  modifyEvent() {
    this.modify.emit(this.dish);
  }

  deleteEvent() {
    this.delete.emit(this.dish);
  }

}
