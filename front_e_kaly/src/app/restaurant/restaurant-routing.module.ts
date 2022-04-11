import { NgModule } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { Routes, RouterModule } from '@angular/router';
import { CurrentOrdersComponent } from './current-orders/current-orders.component';
import { DishFormComponent } from './dish-form/dish-form.component';
import { ListDishesComponent } from './list-dishes/list-dishes.component';
import { ProfitsComponent } from './profits/profits.component';

const routes: Routes = [
  {
    path: '',
    component: ListDishesComponent
  },
  {
    path: 'profits',
    component: ProfitsComponent
  },
  {
    path: 'form/:id',
    component: DishFormComponent
  },
  {
      path: 'add',
      component: DishFormComponent
  }, {
      path: 'current',
      component: CurrentOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}]
})
export class RestaurantRoutingModule { }
