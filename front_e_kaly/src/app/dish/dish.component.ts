import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
  @Input() name: String = "";
  @Input() price: Number = 0.0;
  
  constructor() {
  }

  ngOnInit(): void {
  }

  select() {
    console.log(this.name);
  }
}
