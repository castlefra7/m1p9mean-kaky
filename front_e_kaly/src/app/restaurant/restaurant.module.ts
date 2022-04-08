import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentOrdersComponent } from './current-orders/current-orders.component';
import { ListDishesComponent } from './list-dishes/list-dishes.component';
import { ProfitsComponent } from './profits/profits.component';
import { RestaurantRoutingModule } from './restaurant-routing.module';



@NgModule({
  declarations: [
    CurrentOrdersComponent,
    ListDishesComponent,
    ProfitsComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule
  ]
})
export class RestaurantModule { }
