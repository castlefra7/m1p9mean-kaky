import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../models/dish.model';
import { OrderingService } from '../ordering.service';


@Component({
  selector: 'app-selected-dishes',
  templateUrl: './selected-dishes.component.html',
  styleUrls: ['./selected-dishes.component.scss']
})
export class SelectedDishesComponent implements OnInit {
  @Input() selectedDishes: Dish[] = [];
  cardcolor: String = "blue";
  dishname: string = "";

  constructor(private orderService: OrderingService) {
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
        error: (e) => console.error(e),
        complete: () => {
            this.selectedDishes.splice(0);
        }
    });
  }

}
